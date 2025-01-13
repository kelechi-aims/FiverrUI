import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { createError } from "../utils/createError.js";


export const register = async(req, res, next) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10); // use await with hash

        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json("User created successfully");
    } catch (err) {
        next(err)
    }
}

export const login = async(req, res, next) => {
        try {
            
            const user = await User.findOne({username: req.body.username});

            if(!user) return next(createError(404, "User not found"));
            const validPassword = bcrypt.compareSync(req.body.password, user.password); // use await with compare
            if(!validPassword) return next(createError(401, "Invalid password or username"));

            const {password, ...withOutPassword} = user._doc; // prevent sending password to the frontend

            const token = jwt.sign({
                id: user._id, 
                isSeller: user.isSeller
            }, process.env.JWT_SECRET);

            res.cookie("accessToken", token, {httpOnly: true}).status(200).json(withOutPassword);

        } catch (err) {
            next(err);
        }
}

export const logout = async(req, res) => {
    res
        .clearCookie("accessToken", {
            sameSite: "none", // front and back end are on different ports
            secure: true
    })
        .status(200)
        .send("User has been logged out");
}
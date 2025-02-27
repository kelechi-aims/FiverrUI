import Gig from "../models/gig.model.js";
import { createError } from "../utils/createError.js";

export const createGig = async (req, res, next) => {
    if(!req.isSeller) return next(createError(403, "Only sellers can create a gig!"));

    try {
        const newGig = new Gig({
            userId: req.userId,
            ...req.body,
        });

        const savedGig = await newGig.save();
        res.status(201).json(savedGig);
    } catch (err) {
        next(err);
    }
}

export const deleteGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);

        if (gig.userId !== req.userId) return next(createError(403, "You can delete only your gig!"));

        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been deleted!");
    } catch (err) {
        next(err);
    }
}

export const getGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) next(createError(404, "Gig not found!"));

        res.status(200).send(gig);
    } catch (err) {
        next(err);
    }
}

export const getGigs = async (req, res, next) => {
    try {
        const q = req.query;
        const filters = {};

        if (q.userId) filters.userId = q.userId;
        if (q.catagory) filters.catagory = q.catagory;
        if (q.subCatagory) filters.subCatagory = q.subCatagory;
        if (q.search) filters.title = { $regex: q.search, $options: "i" };
        if (q.min || q.max) {
            filters["packages.price"] = {};
            if (q.min) filters["packages.price"].$gte = q.min;
            if (q.max) filters["packages.price"].$lte = q.max;
        }
        if (q.minReviews) filters.totalReviews = { $gte: q.minReviews };

        const gigs = await Gig.find(filters).sort({ [q.sort] : -1 });
        if (!gigs) next(createError(404, "Gigs not found!"));
        res.status(200).send(gigs);
    } catch (err) {
        next(err);
    }    
}
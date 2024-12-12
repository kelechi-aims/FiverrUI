import { createError } from "../utils/createError.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const createMessage = async(req, res, next) => {
    const newMessage = new Message({
        conversationId: req.body.conversationId,
        userId: req.userId,
        description: req.body.description
    });

    try {
        const savedMessage = await newMessage.save();
       
        // if(!savedMessage) return next(createError(500, "Something went wrong"));
       
        await Conversation.findOneAndUpdate({id: req.body.conversationId}, {
            $set: {
                readBySeller: req.isSeller,
                readByBuyer: !req.isSeller,
                lastMessage: req.body.description
            }
        }, {new: true});
        
        res.status(201).send(savedMessage);
    } catch (err) {
        next(err)
    }
}

export const getMessages = async(req, res, next) => {
    try {
        const messages = await Message.find({conversationId: req.params.id});
        if(!messages) return next(createError(404, "No messages found"));
        res.status(200).send(messages);
    } catch (err) {
        next(err)
    }
}
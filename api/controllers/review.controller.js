import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";
import { createError } from "../utils/createError.js";

export const createReview = async(req, res, next) => {
    if (req.isSeller) return next(createError(403, "Sellers can't create a review!"));

        const newReview = new Review({
            gigId: req.body.gigId,
            userId: req.userId,
            description: req.body.description,
            star: req.body.star,
        })

    try{
        const review = await Review.findOne({
            gigId: req.body.gigId,
            userId: req.userId,
        });
        if (review) return next(createError(403, "You have already created a review for this gig!"));

        //TODO: check if the user purchased the gig.

        const savedReview = await newReview.save();

        // Update the gig's totalReviews and starRating fields
        await Gig.findByIdAndUpdate(req.body.gigId, {
            $inc: { totalReviews: 1, totalStars: req.body.star, starNumber: 1 },
        });
        res.status(201).send(savedReview);
    } catch (error) {
        next(error);
    }
}


export const getReviews = async(req, res, next) => {
    try{
        const reviews = await Review.find({ gigId : req.params.gigId });

        if (!reviews) return next(createError(404, "Reviews not found!"));

        res.status(200).send(reviews);
    } catch (error) {
        next(error);
    }       
}

export const deleteReview = async(req, res, next) => {
    try{
        const review = await Review.findById(req.params.id);

        if (review.userId !== req.userId) return next(createError(403, "You can delete only your own review!"));

        await Review.findByIdAndDelete(req.params.id);

        res.status(200).send("The review has been deleted!");
    } catch (error) {
        next(error);
    }    
}
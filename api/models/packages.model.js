import mongoose from 'mongoose';
const { Schema } = mongoose;

const packageSchema = new Schema({
    gigId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    shortTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    deliveryTime: {
        type: Number,
        required: true
    },
    unlimitedRevisions: {
        type: Boolean,
        required: true
    },
    revisionNumber: {
        type: Number,
        required: false,
    },
    features: {
        type: [String],
        required: true
    },
}, { timestamps: true });

export default mongoose.model("Package", packageSchema);
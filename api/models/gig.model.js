import mongoose from 'mongoose';
const { Schema } = mongoose;

const packageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
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
        default: false
    },
    revisionNumber: {
        type: Number,
        default: 0,
    },
    features: {
        functionalWebsite: { type: Boolean, default: false },
        responsiveDesign: { type: Boolean, default: false },
        ecommerceFunctionality: { type: Boolean, default: false },
        paymentProcessing: { type: Boolean, default: false },
        speedOptimization: { type: Boolean, default: false },
        socialMediaIcons: { type: Boolean, default: false },
        numberOfPAges: { type: Number, default: 0 },
        pliginsExtensionsInstallation: { type: Number, default: 0 },
        numberOfProducts: { type: Number, default: 0 },
    },
});

const gigSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    totalStars: {
        type: Number,
        default: 0,
    },
    starNumber: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
    fiverChoice: {
        type: Boolean,
        default: false
    },
    workOrder: {
        type: Number,
        default: 0,
    },
    catagory: {
        type: String,
        required: true
    },
    subCatagory: {
        type: String,
        required: true
    },
    packages: {
        type: [packageSchema],
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: false
    },
    vidoes: {
        type: [String],
        required: false
    },
    likes: {
        type: Number,
        default: 0
    },
    sales: {
        type: Number,
        default: 0,
    },
    totalReviews: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    }

}, { timestamps: true });

export default mongoose.model("Gig", gigSchema);

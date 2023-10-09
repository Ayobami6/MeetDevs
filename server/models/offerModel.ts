import mongoose from 'mongoose';
import { Offer } from '../interfaces/offerInterface';

const { Schema } = mongoose;

const OfferSchema = new Schema<Offer>({
    talentId: String,
    employerId: String,
    title: String,
    description: String,
    accepted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
});

const Offer = mongoose.model('Offer', OfferSchema);

export default Offer;

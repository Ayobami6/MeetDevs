import mongoose from 'mongoose';
import { Offer } from '../interfaces/offerInterface';

const { Schema } = mongoose;

const OfferSchema = new Schema<Offer>({
    talentId: String,
    employerId: String,
    title: String,
    description: String,
    accepted: Boolean,
    createdAt: Date,
    updatedAt: Date,
});

const Offer = mongoose.model('Offer', OfferSchema);

export default Offer;

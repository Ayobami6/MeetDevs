import { model, Schema } from 'mongoose';
import { Talent } from '../interfaces/talentInterface';

const talentSchema = new Schema<Talent>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    jobRole: String,
    location: String,
    bio: String,
    github: String,
    socials: [String],
    hasOffer: { type: Boolean, default: false },
    profileImg: String,
    rank: { type: Number, default: 0 },
});

const Talent = model<Talent>('talents', talentSchema);

export default Talent;

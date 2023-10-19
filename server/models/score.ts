import mongoose from 'mongoose';
import { TalentScore } from '../interfaces/score';

const { Schema } = mongoose;

const TalentScoreSchema = new Schema<TalentScore>({
    talentId: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
});

const TalentScore = mongoose.model('TalentScore', TalentScoreSchema);

export default TalentScore;

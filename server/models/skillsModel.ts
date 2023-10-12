import mongoose from 'mongoose';
import { Skill } from '../interfaces/skillInterface';

const { Schema } = mongoose;

const SkillSchema = new Schema<Skill>({
    talentId: {
        type: String,
        required: true,
    },
    name: String,
    subSkills: String,
});

const Skill = mongoose.model('Skill', SkillSchema);

export default Skill;

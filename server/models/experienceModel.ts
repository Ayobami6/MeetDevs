import mongoose from 'mongoose';
import { Experience } from '../interfaces/experienceInterface';

const { Schema } = mongoose;

const ExperienceSchema = new Schema<Experience>({
    talentId: {
        type: String,
        required: true,
    },
    jobTitle: String,
    employer: String,
    startDate: Date,
    endDate: Date,
    country: String,
    description: String,
});

const Experience = mongoose.model('Experience', ExperienceSchema);

export default Experience;

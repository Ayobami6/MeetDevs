import mongoose from 'mongoose';
import { Education } from '../interfaces/education';

const { Schema } = mongoose;

const EducationSchema = new Schema<Education>({
    talentId: {
        type: String,
        required: true,
    },
    degree: String,
    school: String,
    country: String,
    city: String,
    startDate: Date,
    endDate: Date,
    description: String,
});

const Education = mongoose.model('Education', EducationSchema);

export default Education;

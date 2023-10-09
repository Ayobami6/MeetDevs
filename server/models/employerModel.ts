import mongoose from 'mongoose';
import { Employer } from '../interfaces/employerInterface';

const { Schema } = mongoose;

const EmployerSchema = new Schema<Employer>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    companyName: String,
    profileImg: String,
    companyUrl: String,
    socials: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Employer = mongoose.model('Employer', EmployerSchema);

export default Employer;

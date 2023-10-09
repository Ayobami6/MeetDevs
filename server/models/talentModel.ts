import { model, Schema } from 'mongoose';
import {
    Certification,
    Education,
    Experience,
    Project,
    Talent,
} from '../interfaces/talentInterface';

const experienceSchema = new Schema<Experience>(
    {
        jobTitle: String,
        description: String,
        employer: String,
        city: String,
        country: String,
        startDate: Schema.Types.Date,
        endDate: Schema.Types.Date,
    },
    { _id: false },
);
const educationSchema = new Schema<Education>(
    {
        degree: String,
        description: String,
        city: String,
        country: String,
        startDate: Schema.Types.Date,
        endDate: Schema.Types.Date,
        school: String,
    },
    { _id: false },
);
const certificationSchema = new Schema<Certification>(
    { link: String, title: String },
    { _id: false },
);
const projectSchema = new Schema<Project>(
    { name: String, description: String, link: String },
    { _id: false },
);

const talentSchema = new Schema<Talent>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    jobRole: { type: String, required: true },
    experience: [experienceSchema],
    skills: [String],
    education: [educationSchema],
    bio: String,
    certifications: [certificationSchema],
    github: String,
    socials: [String],
    hasOffer: { type: Boolean, default: false },
    profileImg: String,
    rank: { type: Number, default: 0 },
    projects: [projectSchema],
});

const Talent = model<Talent>('talents', talentSchema);

export default Talent;

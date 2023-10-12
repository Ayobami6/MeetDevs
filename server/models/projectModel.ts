import mongoose from 'mongoose';
import { Project } from '../interfaces/project';

const { Schema } = mongoose;

const ProjectSchema = new Schema<Project>({
    talentId: {
        type: String,
        required: true,
    },
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    link: String,
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;

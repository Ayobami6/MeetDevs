import mongoose from 'mongoose';
import { Certifications } from '../interfaces/certificationInterface';

const { Schema } = mongoose;

const CertificationSchema = new Schema<Certifications>({
    talentId: {
        type: String,
        required: true,
    },
    title: String,
    description: String,
    link: String,
});

const Certification = mongoose.model('Certification', CertificationSchema);

export default Certification;

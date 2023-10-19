/* eslint-disable indent */
import { CertificationResponse } from '../interfaces/certificationInterface';
import { GenericRequest, GenericResponse } from '../generics/types';
import Certification from '../models/certificationModel';

// add a Certification
export const addCertification = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<CertificationResponse, string>
) => {
    try {
        const certificationData: T = req.body;
        const createdCertification = await Certification.create({
            ...certificationData,
        });
        res.status(201).json(createdCertification);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get all Certification
export const getAllCertification = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<CertificationResponse, string>
) => {
    try {
        const certifications: Array<T> = await Certification.find();
        res.status(200).json(certifications);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get a Certification
export const getACertification = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<CertificationResponse, string>
) => {
    try {
        const { id } = req.params;
        const certification = await Certification.findById(id);
        if (!certification)
            return res.status(404).json({ message: 'Certification not found' });
        res.status(200).json(certification);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get Certifications by Talent
export const getCertificationByTalent = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<CertificationResponse, string>
) => {
    try {
        const { talentId } = req.params;
        const certification = await Certification.find({ talentId });
        if (!certification)
            return res.status(404).json({ message: 'Certification not found' });
        res.status(200).json(certification);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// update Certification
export const updateCertification = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<CertificationResponse, string>
) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const certification = await Certification.findByIdAndUpdate(id, data);
        if (!certification)
            return res.status(404).json({ message: 'Certification not found' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// delete Certification
export const deleteCertification = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<CertificationResponse, string>
) => {
    try {
        const { id } = req.params;
        const certification = await Certification.findByIdAndDelete(id);
        if (!certification)
            return res.status(404).json({ message: 'Certification Not Found' });
        res.status(200).json({ message: 'Certification deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

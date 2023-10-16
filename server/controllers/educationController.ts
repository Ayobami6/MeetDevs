import { EducationResponse } from '../interfaces/education';
import { GenericRequest, GenericResponse } from '../generics/types';
import Education from '../models/educationModel';

// add a Education
export const addEducation = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<EducationResponse, string>,
) => {
    try {
        const educationData: T = req.body;
        const createdEducation = await Education.create({ ...educationData });
        res.status(201).json(createdEducation);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get all Education
export const getAllEducation = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<EducationResponse, string>,
) => {
    try {
        const educations: Array<T> = await Education.find();
        res.status(200).json(educations);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get a Education
export const getAnEducation = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<EducationResponse, string>,
) => {
    try {
        const { id } = req.params;
        const education = await Education.findById(id);
        if (!Education) return res.status(404).json({ message: 'Education not found' });
        res.status(200).json(education);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// update Education
export const updateEducation = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<EducationResponse, string>,
) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const education = await Education.findByIdAndUpdate(id, data);
        if (!education) return res.status(404).json({ message: 'Education not found' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// delete Education
export const deleteEducation = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<EducationResponse, string>,
) => {
    try {
        const { id } = req.params;
        const education = await Education.findByIdAndDelete(id);
        if (!education) return res.status(404).json({ message: 'Education Not Found' });
        res.status(200).json({ message: 'Education deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

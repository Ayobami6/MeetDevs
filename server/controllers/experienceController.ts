import { ExperienceResponse } from '../interfaces/experienceInterface';
import { GenericRequest, GenericResponse } from '../generics/types';
import Experience from '../models/experienceModel';
import { errorHandler } from '../errors/customError';

// add experience
export const addExperience = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ExperienceResponse, string>
) => {
    try {
        const data: T = req.body;
        const createdExperience = await Experience.create({ ...data });
        res.status(201).json(createdExperience);
    } catch (error) {
        errorHandler(error, res);
    }
};

// get all experience
export const getAllExperience = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ExperienceResponse, string>
) => {
    try {
        const experiences: Array<T> = await Experience.find();
        res.status(200).json(experiences);
    } catch (error) {
        errorHandler(error, res);
    }
};

// get an experience

export const getExperience = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ExperienceResponse, string>
) => {
    try {
        const { id } = req.params;
        const experience = await Experience.findById(id);
        if (!experience)
            return res.status(404).json({ message: 'Experience not found' });
    } catch (error) {
        errorHandler(error, res);
    }
};

// get an experience by ID
export const getExperienceByTalent = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ExperienceResponse, string>
) => {
    try {
        const { talentId } = req.params;
        const experience = await Experience.find({ talentId });
        if (!experience)
            return res.status(404).json({ message: 'Experience not found' });
    } catch (error) {
        errorHandler(error, res);
    }
};

// update an experience
export const updateExperience = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ExperienceResponse, string>
) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedExperience = await Experience.findByIdAndUpdate(id, data);
        if (!updatedExperience)
            return res.status(404).json({ message: 'Experience not found' });
        res.status(200).json(updatedExperience);
    } catch (error) {
        errorHandler(error, res);
    }
};

// delete experience
export const deleteExperience = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ExperienceResponse, string>
) => {
    try {
        const { id } = req.params;
        const experience = await Experience.findByIdAndDelete(id);
        if (!experience)
            return res.status(404).json({ message: 'Experience not found' });
        res.status(200).json({ message: 'Experience deleted successfully' });
    } catch (error) {
        errorHandler(error, res);
    }
};

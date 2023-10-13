import { ResponseDocument } from '../interfaces/offerInterface';
import { GenericRequest, GenericResponse } from '../generics/types';
import Skill from '../models/skillsModel';

// add a skill
export const addSkill = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const skillData: T = req.body;
        const createdSkill = await Skill.create({ ...skillData });
        res.status(201).json(createdSkill);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get all skill
export const getAllSkill = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const skills: Array<T> = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get a Skill
export const getASkill = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const { id } = req.params;
        const skill = await Skill.findById(id);
        res.status(200).json(skill);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

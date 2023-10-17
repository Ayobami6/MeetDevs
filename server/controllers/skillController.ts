import { SkillResponse } from '../interfaces/skillInterface';
import { GenericRequest, GenericResponse } from '../generics/types';
import Skill from '../models/skillsModel';

// add a skill
export const addSkill = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<SkillResponse, string>
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
    res: GenericResponse<SkillResponse, string>
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
    res: GenericResponse<SkillResponse, string>
) => {
    try {
        const { id } = req.params;
        const skill = await Skill.findById(id);
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
        res.status(200).json(skill);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getASkillByTalent = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<SkillResponse, string>
) => {
    try {
        const { talentId } = req.params;
        const skill = await Skill.find({ talentId });
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
        res.status(200).json(skill);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// update skill
export const updateSkill = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<SkillResponse, string>
) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const skill = await Skill.findByIdAndUpdate(id, data);
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// delete skill
export const deleteSkill = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<SkillResponse, string>
) => {
    try {
        const { id } = req.params;
        const skill = await Skill.findByIdAndDelete(id);
        if (!skill) return res.status(404).json({ message: 'Skill Not Found' });
        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

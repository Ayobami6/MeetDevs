import { ProjectResponse } from '../interfaces/project';
import { GenericRequest, GenericResponse } from '../generics/types';
import Project from '../models/projectModel';

// add a Project
export const addProject = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ProjectResponse, string>
) => {
    try {
        const projectData: T = req.body;
        const createdProject = await Project.create({ ...projectData });
        res.status(201).json(createdProject);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get all Project
export const getAllProject = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ProjectResponse, string>
) => {
    try {
        const projects: Array<T> = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get a Project
export const getAProject = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ProjectResponse, string>
) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(Project);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getAProjectByTalent = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ProjectResponse, string>
) => {
    try {
        const { talentId } = req.params;
        const project = await Project.find({ talentId });
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(Project);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// update Project
export const updateProject = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ProjectResponse, string>
) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const project = await Project.findByIdAndUpdate(id, data);
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// delete Project
export const deleteProject = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ProjectResponse, string>
) => {
    try {
        const { id } = req.params;
        const project = await Project.findByIdAndDelete(id);
        if (!project)
            return res.status(404).json({ message: 'Project Not Found' });
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

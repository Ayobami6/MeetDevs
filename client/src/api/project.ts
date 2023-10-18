import axios from 'axios';

export const getTalentProjects = (talentId) => {
    const talentProjects = axios.get(
        `http://localhost:3000/projects/talent/${talentId}`
    );
    return talentProjects;
};

export const updateProject = (id, project) => {
    const res = axios.put(`http://localhost:3000/projects/${id}`, project);
    return res;
};

export const deleteProject = (id) => {
    axios.delete(`http://localhost:3000/projects/${id}`);
};

export const createProject = (projectData) => {
    const data = axios.post('http://localhost:3000/projects', projectData);
    return data;
};

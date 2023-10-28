// @ts-nocheck
import axios from 'axios';

export const getTalentProjects = (talentId) => {
  const talentProjects = axios.get(
    `https://meetdevs-api.onrender.com/projects/talent/${talentId}`,
  );
  return talentProjects;
};

export const updateProject = (id, project) => {
  const res = axios.put(
    `https://meetdevs-api.onrender.com/projects/${id}`,
    project,
  );
  return res;
};

export const deleteProject = (id) => {
  axios.delete(`https://meetdevs-api.onrender.com/projects/${id}`);
};

export const createProject = (projectData) => {
  const data = axios.post(
    'https://meetdevs-api.onrender.com/projects',
    projectData,
  );
  return data;
};

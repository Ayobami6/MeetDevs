import axios from 'axios';

export const getTalentProjects = (talentId) => {
  const talentProjects = axios.get(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/projects/talent/${talentId}`,
  );
  return talentProjects;
};

export const updateProject = (id, project) => {
  const res = axios.put(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/projects/${id}`, project);
  return res;
};

export const deleteProject = (id) => {
  axios.delete(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/projects/${id}`);
};

export const createProject = (projectData) => {
  const data = axios.post('https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/projects', projectData);
  return data;
};

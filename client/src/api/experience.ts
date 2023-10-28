// @ts-nocheck
import axios from 'axios';

export const getTalentExperiences = (talentId) => {
  const talentExperiences = axios.get(
    `http://localhost:3000/experiences/talent/${talentId}`,
  );
  return talentExperiences;
};

export const updateExperience = (id, experience) => {
  const res = axios.put(`http://localhost:3000/experiences/${id}`, experience);
  return res;
};

export const deleteExperience = (id) => {
  axios.delete(`http://localhost:3000/experiences/${id}`);
};

export const createExperience = (experienceData) => {
  const data = axios.post('http://localhost:3000/experiences', experienceData);
  return data;
};

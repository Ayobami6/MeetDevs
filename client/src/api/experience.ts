// @ts-nocheck
import axios from 'axios';

export const getTalentExperiences = (talentId) => {
  const talentExperiences = axios.get(
    `https://meetdevs-api.onrender.com/experiences/talent/${talentId}`,
  );
  return talentExperiences;
};

export const updateExperience = (id, experience) => {
  const res = axios.put(
    `https://meetdevs-api.onrender.com/experiences/${id}`,
    experience,
  );
  return res;
};

export const deleteExperience = (id) => {
  axios.delete(`https://meetdevs-api.onrender.com/experiences/${id}`);
};

export const createExperience = (experienceData) => {
  const data = axios.post(
    'https://meetdevs-api.onrender.com/experiences',
    experienceData,
  );
  return data;
};

// @ts-nocheck
import axios from 'axios';

export const getTalentEducations = (talentId) => {
  const talentEducations = axios.get(
    `https://meetdevs-api.onrender.com/educations/talent/${talentId}`,
  );
  return talentEducations;
};

export const updateEducation = (id, education) => {
  const res = axios.put(
    `https://meetdevs-api.onrender.com/educations/${id}`,
    education,
  );
  return res;
};

export const deleteEducation = (id) => {
  axios.delete(`https://meetdevs-api.onrender.com/educations/${id}`);
};

export const createEducation = (educationData) => {
  const data = axios.post(
    'https://meetdevs-api.onrender.com/educations',
    educationData,
  );
  return data;
};

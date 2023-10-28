// @ts-nocheck
import axios from 'axios';

export const getTalentSkills = (talentId) => {
  const talentSkills = axios.get(
    `https://meetdevs-api.onrender.com/skills/talent/${talentId}`,
  );
  return talentSkills;
};

export const updateSkill = (id, skill) => {
  const res = axios.put(
    `https://meetdevs-api.onrender.com/skills/${id}`,
    skill,
  );
  return res;
};

export const deleteSkill = (id) => {
  axios.delete(`https://meetdevs-api.onrender.com/skills/${id}`);
};

export const createSkill = (skillData) => {
  const data = axios.post(
    'https://meetdevs-api.onrender.com/skills',
    skillData,
  );
  return data;
};

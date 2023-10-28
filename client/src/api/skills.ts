// @ts-nocheck
import axios from 'axios';

export const getTalentSkills = (talentId) => {
  const talentSkills = axios.get(
    `http://localhost:3000/skills/talent/${talentId}`,
  );
  return talentSkills;
};

export const updateSkill = (id, skill) => {
  const res = axios.put(`http://localhost:3000/skills/${id}`, skill);
  return res;
};

export const deleteSkill = (id) => {
  axios.delete(`http://localhost:3000/skills/${id}`);
};

export const createSkill = (skillData) => {
  const data = axios.post('http://localhost:3000/skills', skillData);
  return data;
};

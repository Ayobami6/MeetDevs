import axios from 'axios';

export const getTalentSkills = (talentId) => {
    const talentSkills = axios.get(
        `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/skills/talent/${talentId}`
    );
    return talentSkills;
};

export const updateSkill = (id, skill) => {
    const res = axios.put(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/skills/${id}`, skill);
    return res;
};

export const deleteSkill = (id) => {
    axios.delete(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/skills/${id}`);
};

export const createSkill = (skillData) => {
    const data = axios.post('https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/skills', skillData);
    return data;
};

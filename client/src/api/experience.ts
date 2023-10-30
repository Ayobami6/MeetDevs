import axios from 'axios';

export const getTalentExperiences = (talentId) => {
    const talentExperiences = axios.get(
        `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/experiences/talent/${talentId}`
    );
    return talentExperiences;
};

export const updateExperience = (id, experience) => {
    const res = axios.put(
        `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/experiences/${id}`,
        experience
    );
    return res;
};

export const deleteExperience = (id) => {
    axios.delete(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/experiences/${id}`);
};

export const createExperience = (experienceData) => {
    const data = axios.post(
        'https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/experiences',
        experienceData
    );
    return data;
};

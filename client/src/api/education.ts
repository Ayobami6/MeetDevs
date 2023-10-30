import axios from 'axios';

export const getTalentEducations = (talentId) => {
    const talentEducations = axios.get(
        `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/educations/talent/${talentId}`
    );
    return talentEducations;
};

export const updateEducation = (id, education) => {
    const res = axios.put(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/educations/${id}`, education);
    return res;
};

export const deleteEducation = (id) => {
    axios.delete(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/educations/${id}`);
};

export const createEducation = (educationData) => {
    const data = axios.post('https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/educations', educationData);
    return data;
};

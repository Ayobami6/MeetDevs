import axios from 'axios';

export const getTalentEducations = (talentId) => {
    const talentEducations = axios.get(
        `http://localhost:3000/educations/talent/${talentId}`
    );
    return talentEducations;
};

export const updateEducation = (id, education) => {
    const res = axios.put(`http://localhost:3000/educations/${id}`, education);
    return res;
};

export const deleteEducation = (id) => {
    axios.delete(`http://localhost:3000/educations/${id}`);
};

export const createEducation = (educationData) => {
    const data = axios.post('http://localhost:3000/educations', educationData);
    return data;
};

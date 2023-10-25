import axios from 'axios';

export const getAllTalents = () => {
	const talents = axios.get('http://localhost:3000/talents');
	return talents;
};

export const getATalent = (id) => {
	const talent = axios.get(`http://localhost:3000/talents/${id}`);
	return talent;
};

export const patchTalent = (id, data) => {
	const talent = axios.patch(`http://localhost:3000/talents/${id}`, data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return talent;
};

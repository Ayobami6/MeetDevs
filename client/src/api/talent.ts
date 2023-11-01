// @ts-nocheck
import axios from 'axios';

export const getAllTalents = () => {
	const talents = axios.get('https://meetdevs-api.onrender.com/talents');
	return talents;
};

export const getATalent = (id) => {
	const talent = axios.get(`https://meetdevs-api.onrender.com/talents/${id}`);
	return talent;
};

export const patchTalent = (id, data) => {
	const talent = axios.patch(
		`https://meetdevs-api.onrender.com/talents/${id}`,
		data,
	);
	return talent;
};

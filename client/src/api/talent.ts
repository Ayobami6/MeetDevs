import axios from 'axios';

export const getAllTalents = () => {
	const talents = axios.get('https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/talents');
	return talents;
};

export const getATalent = (id) => {
	const talent = axios.get(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/talents/${id}`);
	return talent;
};

export const patchTalent = (id, data) => {
	const talent = axios.patch(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/talents/${id}`, data);
	return talent;
};

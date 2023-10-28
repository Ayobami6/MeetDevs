// @ts-nocheck
import axios from 'axios';

export const getTalentOffers = (talentId) => {
	const talentOffers = axios.get(
		`http://localhost:3000/offers/talent/${talentId}`,
	);
	return talentOffers;
};

export const getEmployerOffers = (employerId) => {
	const employerOffers = axios.get(
		`http://localhost:3000/offers/employer/${employerId}`,
	);
	return employerOffers;
};

export const updateOffer = (id, offer) => {
	const res = axios.patch(`http://localhost:3000/offers/${id}`, offer);
	return res;
};

export const deleteOffer = (id) => {
	axios.delete(`http://localhost:3000/offers/${id}`);
};

export const createOffer = (offerData) => {
	const data = axios.post('http://localhost:3000/offers', offerData);
	return data;
};

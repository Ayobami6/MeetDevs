// @ts-nocheck
import axios from 'axios';

export const getTalentOffers = (talentId) => {
	const talentOffers = axios.get(
		`https://meetdevs-api.onrender.com/offers/talent/${talentId}`,
	);
	return talentOffers;
};

export const getEmployerOffers = (employerId) => {
	const employerOffers = axios.get(
		`https://meetdevs-api.onrender.com/offers/employer/${employerId}`,
	);
	return employerOffers;
};

export const updateOffer = (id, offer) => {
	const res = axios.patch(
		`https://meetdevs-api.onrender.com/offers/${id}`,
		offer,
	);
	return res;
};

export const deleteOffer = (id) => {
	axios.delete(`https://meetdevs-api.onrender.com/offers/${id}`);
};

export const createOffer = (offerData) => {
	const data = axios.post(
		'https://meetdevs-api.onrender.com/offers',
		offerData,
	);
	return data;
};

import {
	getTalentOffers,
	getEmployerOffers,
	updateOffer,
	deleteOffer,
} from '../api/offer';

export const getOffersTalent = (talentId, setLoading) => async (dispatch) => {
	try {
		setLoading(true);
		const { data } = await getTalentOffers(talentId);
		dispatch({ type: 'FETCH_TALENT_OFFER', payload: data });
		setLoading(false);
	} catch (error) {
		setLoading(false);
		console.log(error.message);
	}
};

export const getOffersEmployer =
	(employerId, setLoading) => async (dispatch) => {
		try {
			setLoading(true);
			const { data } = await getEmployerOffers(employerId);
			dispatch({ type: 'FETCH_EMPLOYER_OFFER', payload: data });
			setLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

export const offerUpdate = (id, offerData) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await updateOffer(id, offerData);
		dispatch({ type: 'UPDATE_OFFER', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error.message);
	}
};

export const offerDelete = (id, setLoading) => async (dispatch) => {
	try {
		setLoading(true);
		await deleteOffer(id);
		dispatch({ type: 'DELETE_OFFER', payload: id });
		setLoading(false);
	} catch (error) {
		console.log(error.message);
	}
};

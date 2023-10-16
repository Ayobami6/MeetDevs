export const offerReducer = (
	state = {
		isLoading: false,
		talentOffers: [],
		employerOffers: [],
		offer: null,
	},
	action
) => {
	switch (action.type) {
		case 'START_LOADING':
			return { ...state, isLoading: true };
		case 'END_LOADING':
			return { ...state, isLoading: false };
		case 'FETCH_TALENT_OFFER':
			return { ...state, talentOffers: action.payload.offers };

		case 'FETCH_EMPLOYER_OFFER':
			return { ...state, employerOffers: action.payload.offers };

		case 'UPDATE_OFFER':
		case 'CREATE_OFFER':
			return { ...state, offer: action.payload };

		case 'DELETE_OFFER':
			return { ...state };

		default:
			return state;
	}
};

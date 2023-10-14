export const talentReducer = (state = { isLoading: true, talents: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case 'FETCH_ALL':
            return { ...state, talents: action.payload }

        default:
            return state;
    }
}
export const scoreReducer = (
    state = {
        talentScores: [],
        talentScore: null,
    },
    action
) => {
    switch (action.type) {
        case 'FETCH_TALENTS_SCORE':
            return { ...state, talentScores: action.payload };
        case 'UPDATE_TALENT_SCORE':
            return { ...state, talentScore: action.payload.score };

        default:
            return state;
    }
};

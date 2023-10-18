export const scoreReducer = (
    state = {
        talentScore: null,
        talentMeta: null,
    },
    action
) => {
    switch (action.type) {
        case 'FETCH_TALENT_SCORE':
            return { ...state, talentScore: action.payload.score };
        case 'UPDATE_TALENT_META':
            return { ...state, talentScore: action.payload.score };

        default:
            return state;
    }
};

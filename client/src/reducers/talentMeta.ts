export const metaReducer = (
    state = {
        talentMetas: [],
        talentMeta: null,
    },
    action
) => {
    switch (action.type) {
        case 'FETCH_TALENT_META':
            return { ...state, talentMetas: action.payload };
        case 'UPDATE_TALENT_META':
        case 'CREATE_TALENT_META':
            return { ...state, talentMeta: action.payload };

        case 'DELETE_TALENT_META':
            return { ...state };

        default:
            return state;
    }
};

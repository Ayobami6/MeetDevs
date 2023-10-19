export const metaReducer = (
    state = {
        certifications: [],
        certification: null,
        educations: [],
        education: null,
        experiences: [],
        experience: null,
        projects: [],
        project: null,
        skills: [],
        skill: null,
    },
    action
) => {
    switch (action.type) {
        case 'FETCH_TALENT_CERTIFICATION':
            return { ...state, certifications: action.payload };
        case 'UPDATE_TALENT_CERTIFICATION':
        case 'CREATE_TALENT_CERTIFICATION':
            return { ...state, certification: action.payload };

        case 'DELETE_TALENT_CERTIFICATION':
            return { ...state };

        case 'FETCH_TALENT_EDUCATION':
            return { ...state, educations: action.payload };
        case 'UPDATE_TALENT_EDUCATION':
        case 'CREATE_TALENT_EDUCATION':
            return { ...state, education: action.payload };

        case 'DELETE_TALENT_EDUCATION':
            return { ...state };

        case 'FETCH_TALENT_EXPERIENCE':
            return { ...state, experiences: action.payload };
        case 'UPDATE_TALENT_EXPERIENCE':
        case 'CREATE_TALENT_EXPERIENCE':
            return { ...state, experience: action.payload };

        case 'DELETE_TALENT_EXPERIENCE':
            return { ...state };

        case 'FETCH_TALENT_PROJECT':
            return { ...state, projects: action.payload };
        case 'UPDATE_TALENT_PROJECT':
        case 'CREATE_TALENT_PROJECT':
            return { ...state, project: action.payload };

        case 'DELETE_TALENT_PROJECT':
            return { ...state };

        case 'FETCH_TALENT_SKILL':
            return { ...state, skills: action.payload };
        case 'UPDATE_TALENT_SKILL':
        case 'CREATE_TALENT_SKILL':
            return { ...state, skill: action.payload };

        case 'DELETE_TALENT_SKILL':
            return { ...state };

        default:
            return state;
    }
};

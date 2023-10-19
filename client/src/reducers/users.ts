export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TALENT_AUTH':
      localStorage.setItem(
        'talentProfile',
        JSON.stringify({ ...action?.data }),
      );
      return { ...state, user: action?.data?.talent };
    case 'EMPLOYER_AUTH':
      localStorage.setItem(
        'employerProfile',
        JSON.stringify({ ...action?.data }),
      );
      return { ...state, user: action?.data?.data };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, user: null };
    default:
      return state;
  }
};

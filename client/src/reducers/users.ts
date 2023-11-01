export const userReducer = (state = {
  signupSuccessful: false,
}, action) => {
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

    case 'SIGN_SUCCESS':
      return { ...state, signupSuccessful: true }
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, user: null };
    default:
      return state;
  }
};

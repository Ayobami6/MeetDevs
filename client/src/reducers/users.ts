export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TALENT_AUTH':
      localStorage.setItem(
        'talentProfile',
        JSON.stringify({ ...action?.data }),
      );
      return { ...state, user: action?.data?.data };
  }
};

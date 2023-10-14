import { authenticate } from '../api/auth';

export const talentAuth = (endpoint, userData) => async (dispatch) => {
  const { data } = await authenticate(endpoint, userData);
  dispatch({ type: 'TALENT_AUTH', data });
};

export const employerAuth = (endpoint, userData) => async (dispatch) => {
  const { data } = await authenticate(endpoint, userData);
  dispatch({ type: 'EMPLOYER_AUTH', data });
};

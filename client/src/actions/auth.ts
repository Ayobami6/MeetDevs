import { authenticate } from '../api/auth';

export const talentAuth =
  (endpoint, userData, navigate, notify, setLoading) => async (dispatch) => {
    try {
      const { data } = await authenticate(endpoint, userData);
      dispatch({ type: 'TALENT_AUTH', data });
      setLoading(false);
      notify('Signin Sucessful!', { variant: 'success' });
      navigate('/talent');
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
      notify(error.response.data.message, { variant: 'error' });
    }
  };

export const employerAuth =
  (endpoint, userData, navigate, notify, setLoading) => async (dispatch) => {
    try {
      const { data } = await authenticate(endpoint, userData);
      dispatch({ type: 'EMPLOYER_AUTH', data });
      setLoading(false);
      notify('Signin Sucessful!', { variant: 'success' });
      navigate('/employer');
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
      notify(error.response.data.message, { variant: 'error' });
    }
  };

export const talentSignupAuth =
  (endpoint, userData, notify, navigate, setLoading) => async (dispatch) => {
    try {
      const { data } = await authenticate(endpoint, userData);
      dispatch({ type: 'TALENT_AUTH', data });
      setLoading(false);
      notify('Signup Sucessful!', { variant: 'success' });
      navigate('/auth');
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
      notify(error.response.data.message, { variant: 'error' });
    }
  };

export const employerSignupAuth =
  (endpoint, userData, notify, navigate, setLoading) => async (dispatch) => {
    try {
      const { data } = await authenticate(endpoint, userData);
      dispatch({ type: 'EMPLOYER_AUTH', data });
      setLoading(false);
      notify('Signup Sucessful!', { variant: 'success' });
      navigate('/auth');
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
      notify(error.response.data.message, { variant: 'error' });
    }
  };

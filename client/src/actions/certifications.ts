/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { Dispatch } from 'redux';
import {
  getTalentCertifications,
  updateCertification,
  deleteCertification,
  createCertification,
} from '../api/certifications';

export const getCertificationsTalent =
  (talentId: string, setLoading: (loading: boolean) => void) =>
  async (dispatch: Dispatch) => {
    try {
      setLoading(true);
      const { data } = await getTalentCertifications(talentId);
      dispatch({ type: 'FETCH_TALENT_CERTIFICATION', payload: data });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };

export const CertificationUpdate =
  (id, certificationData) => async (dispatch) => {
    try {
      // dispatch({ type: 'START_LOADING' });
      const { data } = await updateCertification(id, certificationData);
      dispatch({ type: 'UPDATE_TALENT_CERTIFICATION', payload: data });
      // dispatch({ type: 'END_LOADING' });
    } catch (error) {
      console.log(error.message);
    }
  };

export const certificationDelete = (id) => async (dispatch) => {
  try {
    // setLoading(true);
    await deleteCertification(id);
    dispatch({ type: 'DELETE_TALENT_CERTIFICATION', payload: id });
    // setLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const certificationCreate =
  (certificationData, setLoading) => async (dispatch) => {
    try {
      setLoading(true);
      const { data } = await createCertification(certificationData);
      dispatch({ type: 'CREATE_TALENT_CERTIFICATION', payload: data });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

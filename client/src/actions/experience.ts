/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux';
import {
    getTalentExperiences,
    updateExperience,
    deleteExperience,
    createExperience,
} from '../api/experience';

export const getExperiencesTalent =
    (talentId: string, setLoading: (loading: boolean) => void) =>
    async (dispatch: Dispatch) => {
        try {
            setLoading(true);
            const { data } = await getTalentExperiences(talentId);
            dispatch({ type: 'FETCH_TALENT_EXPERIENCE', payload: data });
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            console.log(error.message);
        }
    };

export const ExperienceUpdate = (id, ExperienceData) => async (dispatch) => {
    try {
        // dispatch({ type: 'START_LOADING' });
        const { data } = await updateExperience(id, ExperienceData);
        dispatch({ type: 'UPDATE_TALENT_EXPERIENCE', payload: data });
        // dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
};

export const ExperienceDelete = (id) => async (dispatch) => {
    try {
        // setLoading(true);
        await deleteExperience(id);
        dispatch({ type: 'DELETE_TALENT_EXPERIENCE', payload: id });
        // setLoading(false);
    } catch (error) {
        console.log(error.message);
    }
};

export const ExperienceCreate =
    (ExperienceData, setLoading) => async (dispatch) => {
        try {
            setLoading(true);
            const { data } = await createExperience(ExperienceData);
            dispatch({ type: 'CREATE_TALENT_EXPERIENCE', payload: data });
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    };

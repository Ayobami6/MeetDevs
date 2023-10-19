/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux';
import {
    getTalentEducations,
    updateEducation,
    deleteEducation,
    createEducation,
} from '../api/education';

export const getEducationsTalent =
    (talentId: string, setLoading: (loading: boolean) => void) =>
    async (dispatch: Dispatch) => {
        try {
            setLoading(true);
            const { data } = await getTalentEducations(talentId);
            dispatch({ type: 'FETCH_TALENT_EDUCATION', payload: data });
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            console.log(error.message);
        }
    };

export const EducationUpdate = (id, EducationData) => async (dispatch) => {
    try {
        // dispatch({ type: 'START_LOADING' });
        const { data } = await updateEducation(id, EducationData);
        dispatch({ type: 'UPDATE_TALENT_EDUCATION', payload: data });
        // dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
};

export const EducationDelete = (id) => async (dispatch) => {
    try {
        // setLoading(true);
        await deleteEducation(id);
        dispatch({ type: 'DELETE_TALENT_EDUCATION', payload: id });
        // setLoading(false);
    } catch (error) {
        console.log(error.message);
    }
};

export const EducationCreate =
    (EducationData, setLoading) => async (dispatch) => {
        try {
            setLoading(true);
            const { data } = await createEducation(EducationData);
            dispatch({ type: 'CREATE_TALENT_EDUCATION', payload: data });
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    };

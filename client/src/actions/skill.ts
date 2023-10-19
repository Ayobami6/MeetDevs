/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux';
import {
    getTalentSkills,
    updateSkill,
    deleteSkill,
    createSkill,
} from '../api/skills';

export const getSkillsTalent =
    (talentId: string, setLoading: (loading: boolean) => void) =>
    async (dispatch: Dispatch) => {
        try {
            setLoading(true);
            const { data } = await getTalentSkills(talentId);
            dispatch({ type: 'FETCH_TALENT_SKILL', payload: data });
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            console.log(error.message);
        }
    };

export const SkillUpdate = (id, SkillData) => async (dispatch) => {
    try {
        // dispatch({ type: 'START_LOADING' });
        const { data } = await updateSkill(id, SkillData);
        dispatch({ type: 'UPDATE_TALENT_SKILL', payload: data });
        // dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
};

export const SkillDelete = (id) => async (dispatch) => {
    try {
        // setLoading(true);
        await deleteSkill(id);
        dispatch({ type: 'DELETE_TALENT_SKILL', payload: id });
        // setLoading(false);
    } catch (error) {
        console.log(error.message);
    }
};

export const SkillCreate = (SkillData, setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        const { data } = await createSkill(SkillData);
        dispatch({ type: 'CREATE_TALENT_SKILL', payload: data });
        setLoading(false);
    } catch (error) {
        console.log(error.message);
    }
};

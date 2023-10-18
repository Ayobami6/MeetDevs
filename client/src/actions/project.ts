/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux';
import {
    getTalentProjects,
    updateProject,
    deleteProject,
    createProject,
} from '../api/project';

export const getProjectsTalent =
    (talentId: string, setLoading: (loading: boolean) => void) =>
    async (dispatch: Dispatch) => {
        try {
            setLoading(true);
            const { data } = await getTalentProjects(talentId);
            dispatch({ type: 'FETCH_TALENT_META', payload: data });
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            console.log(error.message);
        }
    };

export const ProjectUpdate = (id, ProjectData) => async (dispatch) => {
    try {
        // dispatch({ type: 'START_LOADING' });
        const { data } = await updateProject(id, ProjectData);
        dispatch({ type: 'UPDATE_TALENT_META', payload: data });
        // dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
};

export const ProjectDelete = (id) => async (dispatch) => {
    try {
        // setLoading(true);
        await deleteProject(id);
        dispatch({ type: 'DELETE_TALENT_META', payload: id });
        // setLoading(false);
    } catch (error) {
        console.log(error.message);
    }
};

export const ProjectCreate = (ProjectData, setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        const { data } = await createProject(ProjectData);
        dispatch({ type: 'CREATE_TALENT_META', payload: data });
        setLoading(false);
    } catch (error) {
        console.log(error.message);
    }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux';
import { getTalentScores, updateScore } from '../api/score';

export const getScoresTalent =
    (talentId: string, setLoading: (loading: boolean) => void) =>
    async (dispatch: Dispatch) => {
        try {
            setLoading(true);
            const { data } = await getTalentScores(talentId);
            dispatch({ type: 'FETCH_TALENT_SCORE', payload: data });
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            console.log(error.message);
        }
    };

export const ScoreUpdate = (id, scoreData) => async (dispatch: Dispatch) => {
    try {
        const { data } = await updateScore(id, scoreData);
        dispatch({ type: 'UPDATE_TALENT_SCORE', payload: data });
    } catch (error) {
        console.log(error);
    }
};

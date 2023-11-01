/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { Dispatch } from 'redux';
import { getTalentScores, updateScore } from '../api/score';

export const getScoresTalent =
  (setLoading: (loading: boolean) => void) => async (dispatch: Dispatch) => {
    try {
      setLoading(true);
      const { data } = await getTalentScores();
      dispatch({ type: 'FETCH_TALENTS_SCORE', payload: data });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };

export const ScoreUpdate =
  (id, scoreData, setLoading) => async (dispatch: Dispatch) => {
    try {
      setLoading(true);
      const { data } = await updateScore(id, scoreData);
      dispatch({ type: 'UPDATE_TALENT_SCORE', payload: data });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

// @ts-nocheck
import axios from 'axios';

export const getTalentScores = () => {
  const talentScores = axios.get('https://meetdevs-api.onrender.com/scores');
  return talentScores;
};

// update | create score
export const updateScore = (talentId, scoreData) => {
  const res = axios.put(
    `https://meetdevs-api.onrender.com/scores/${talentId}`,
    scoreData,
  );
  return res;
};

import axios from 'axios';

export const getTalentScores = (talentId) => {
    const talentScores = axios.get(
        `http://localhost:3000/scores/talent/${talentId}`
    );
    return talentScores;
};

// update | create score
export const updateScore = (talentId, scoreData) => {
    const res = axios.put(
        `http://localhost:3000/scores/${talentId}`,
        scoreData
    );
    return res;
};

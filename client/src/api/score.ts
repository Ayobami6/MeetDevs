import axios from 'axios';

export const getTalentScores = () => {
    const talentScores = axios.get('https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/scores');
    return talentScores;
};

// update | create score
export const updateScore = (talentId, scoreData) => {
    const res = axios.put(
        `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/scores/${talentId}`,
        scoreData
    );
    return res;
};

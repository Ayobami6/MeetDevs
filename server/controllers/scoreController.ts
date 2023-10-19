import TalentScore from '../models/score';
import { GenericRequest, GenericResponse } from '../generics/types';
import { TalentScoreResponse } from '../interfaces/score';

// create new score data or update
export const updateScore = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<TalentScoreResponse, string>
) => {
    try {
        const { talentId } = req.params;
        const data = req.body;
        // update talent score if exists else create new
        const score = await TalentScore.findOneAndUpdate({ talentId }, data, {
            new: true,
            upsert: true,
        });
        res.status(201).json(score);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

export const getScores = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<TalentScoreResponse, string>
) => {
    try {
        const talentScores = await TalentScore.find();
        res.status(200).json(talentScores);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

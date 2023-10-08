import { Request, Response } from 'express';
import Talent from '../models/talentModel';

export const allTalents = async (
    _req: Request,
    res: Response,
): Promise<Response> => {
    const users = await Talent.find({});
    return res.json(users);
};

export const getTalentById = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: 'Required an id' });
    }

    const user = await Talent.findById(id);
    if (!user) {
        return res.status(404).json({ error: 'User Not Found' });
    }

    return res.json(user);
};

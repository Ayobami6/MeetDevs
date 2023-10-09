import { NextFunction, Request, Response } from 'express';
import Talent from '../models/talentModel';
import { CustomError } from '../errors/customError';

/**
 *  Returns all talents objects from the database and
 * returns it as a json response
 * @param _req
 * @param res
 * @returns res
 */
export const allTalents = async (
    _req: Request,
    res: Response,
): Promise<Response> => {
    const users = await Talent.find({});
    return res.json(users);
};

/**
 * Get a specifice user info by the user id
 * @param req object
 * @param res object
 * @param next move excution to the next callback
 * @returns res
 */
export const getTalentById = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<Response | undefined> => {
    try {
        const { id } = req.params;

        if (!id) {
            throw new CustomError('Required an id', 400);
        }

        const user = await Talent.findById(id);
        if (!user) {
            throw new CustomError('Required an id', 404);
        }

        return res.json(user);
    } catch (err) {
        next(err);
    }
};

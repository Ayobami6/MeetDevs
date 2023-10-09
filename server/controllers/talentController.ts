import { NextFunction, Request, Response } from 'express';
import Talent from '../models/talentModel';
import { CustomError } from '../errors/customError';
import { Talent as TT } from '../interfaces/talentInterface';

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
    const talents = await Talent.find({});
    return res.json(talents);
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

        const talent = await Talent.findById(id);
        if (!talent) {
            throw new CustomError('Talent not found', 404);
        }

        return res.json(talent);
    } catch (err) {
        next(err);
    }
};

/**
 * Updates a talent's profile information.
 * @async
 * @function
 * @param {Request & { talent: Talent }} req - The request object containing the talent to update.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<Response | undefined>} The updated talent object.
 * @throws {Error} If an error occurs while updating the talent.
 */
export const updateTalent = async (
    req: Request & { talent: Talent },
    res: Response,
    next: NextFunction,
): Promise<Response | undefined> => {
    try {
        let { talent } = req;
        const {
            name,
            bio,
            profileImg,
            projects,
            certifications,
            github,
            socials,
            skills,
        }: TT = req.body;

        talent = (await Talent.findOneAndUpdate(
            { email: talent.email },
            {
                name,
                bio,
                profileImg,
                projects,
                certifications,
                github,
                socials,
                skills,
            },
            { new: true },
        )) as Talent;

        return res.json(talent);
    } catch (err) {
        next(err);
    }
};

export const deleteTalent = async (
    req: Request & { talent: Talent },
    res: Response,
    next: NextFunction,
): Promise<Response | undefined> => {
    try {
        const { talent } = req;

        await Talent.findOneAndDelete({
            email: talent.email,
            name: talent.name,
        });

        return res.status(204).json();
    } catch (err) {
        next(err);
    }
};

export const getCurrentTalent = async (
    req: Request & { talent: Talent },
    res: Response,
): Promise<Response | undefined> => {
    const { talent } = req;
    return res.json(talent);
};

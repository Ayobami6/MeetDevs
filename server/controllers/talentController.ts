import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Talent from '../models/talentModel';
import { CustomError } from '../errors/customError';
import { Talent as TT } from '../interfaces/talentInterface';

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || 'string';

//  TODO
/* 
we need to enhance the signup and signin endpoint
for some validations
name, email and password must be provided on signup if 
not throw an error, Check the employer controller for how that is done
 */
export const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Talent.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newTalent = new Talent({
            name,
            email,
            hashedPassword,
        });

        await newTalent.save();

        const token = jwt.sign(
            { userId: newTalent._id, email: newTalent.email },
            JWT_SECRET,
            {
                expiresIn: '24h',
            },
        );

        res.status(201).json({ token, newTalent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const talent = await Talent.findOne({ email });
        if (!talent) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            talent.hashedPassword,
        );
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: talent._id, email: talent.email },
            JWT_SECRET,
            {
                expiresIn: '24h',
            },
        );

        res.json({ token, talent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
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
        const { id } = req.params;
        const data: TT = req.body;

        const talent = (await Talent.findByIdAndUpdate(id, data, {
            new: true,
        })) as Talent;

        return res.json(talent);
    } catch (err) {
        next(err);
    }
};

export const updatePatchTalent = async (
    req: Request & { talent: Talent },
    res: Response,
    next: NextFunction,
): Promise<Response | undefined> => {
    try {
        const { id } = req.params;
        const data: TT = req.body;

        const talent = (await Talent.findByIdAndUpdate(id, data)) as Talent;
        if (!talent) return res.status(404).json({ message: 'Not Found' });

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
        const { id } = req.params;
        await Talent.findByIdAndDelete(id);

        return res.status(204).json();
    } catch (err) {
        next(err);
    }
};

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Employer from '../models/employerModel';
import { CustomError } from '../errors/customError';

const JWT_SECRET = process.env.JWT_SECRET ?? 'your-secret-key';

export const employerSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    const { name, email, password } = req.body;

    try {
        if (!name) throw new CustomError('name field required', 400);
        if (!email) throw new CustomError('email field required', 400);
        if (!password) throw new CustomError('password field required', 400);
        const empExists = await Employer.findOne({ email });
        if (empExists) return res.json({ message: 'user already exist' });
        const hashedPassword = await bcrypt.hash(password, 10);

        const employer = await Employer.create({
            name,
            email,
            password: hashedPassword,
        });
        if (!employer) throw new CustomError('Could not create user', 400);
        await employer.save();

        const token = jwt.sign({ id: employer._id }, JWT_SECRET, {
            expiresIn: '24h',
        });
        return res.status(201).json({
            token,
            message: 'user created successfully',
            data: {
                ...employer.toJSON(),
                password: undefined,
            },
        });
    } catch (err) {
        next(err);
    }
};

export const employerLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    const { email, password } = req.body;

    try {
        if (!email) throw new CustomError('email field required', 400);
        if (!password) throw new CustomError('password field required', 400);

        const employer = await Employer.findOne({ email });
        if (!employer) throw new CustomError('User not found', 404);
        const token = jwt.sign({ id: employer._id }, JWT_SECRET, {
            expiresIn: '24h',
        });
        return res.status(201).json({
            token,
            message: 'user logged in successfully',
            data: {
                ...employer.toJSON(),
                password: undefined,
            },
        });
    } catch (err) {
        next(err);
    }
};

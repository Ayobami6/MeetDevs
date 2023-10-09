import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import Employer from '../models/employerModel';
import { CustomError } from '../errors/customError';

export const createEmployer = async (req, res) => {
    const employerData = req.body;
    try {
        const employer = await Employer.create({
            ...employerData,
            createdAt: new Date().toISOString(),
        });
        res.status(201).json(employer);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server error');
    }
};

export const signupEmployer = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<Response | undefined> => {
    const { name, email, password } = req.body;

    try {
        const empExists = await Employer.findOne({ email });
        if (empExists) return res.json({ message: 'user already exist' });
        const hashedPassword = await bcrypt.hash(password, 10);

        const employer = await Employer.create({ name, email, hashedPassword });
        if (!employer) throw new CustomError('Could not create user', 400);
        await employer.save();
        return res.status(201).json({ message: 'user created successfully' });
    } catch (err) {
        next(err);
    }
};

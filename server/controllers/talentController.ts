import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Talent from '../models/talentModel';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

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

        const token = jwt.sign({ userId: newTalent._id }, JWT_SECRET, {
            expiresIn: '24h',
        });

        res.status(201).json({ token, userId: newTalent._id });
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

        const isPasswordValid = await bcrypt.compare(password, talent.hashedPassword);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: talent._id }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token, userId: talent._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

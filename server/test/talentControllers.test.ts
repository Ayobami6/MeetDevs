import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Talent from '../models/talentModel';
import { signUp, signIn } from '../controllers/talentController';

dotenv.config();

jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('../models/talentModel');

describe('Auth Controller', () => {
    const mockedRequest: Partial<Request> = {};
    const mockedResponse: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('signUp', () => {
        it('should create a new talent and return a token', async () => {
            const reqBody = {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
            };
            const hashedPassword = 'hashedPassword123';
            const mockTalent = new Talent({
                ...reqBody,
                hashedPassword,
            });
            const mockToken = 'mockToken123';

            Talent.findOne = jest.fn().mockResolvedValueOnce(null);
            bcrypt.hash = jest.fn().mockResolvedValueOnce(hashedPassword);
            Talent.prototype.save = jest.fn().mockResolvedValueOnce(mockTalent);
            jwt.sign = jest.fn().mockReturnValueOnce(mockToken);

            mockedRequest.body = reqBody;

            await signUp(mockedRequest as Request, mockedResponse as Response);

            expect(Talent.findOne).toHaveBeenCalledWith({ email: reqBody.email });
            expect(bcrypt.hash).toHaveBeenCalledWith(reqBody.password, 10);
            expect(Talent.prototype.save).toHaveBeenCalled();
            expect(jwt.sign).toHaveBeenCalledWith(
                { userId: mockTalent._id },
                expect.any(String),
                { expiresIn: '24h' }
            );
            expect(mockedResponse.status).toHaveBeenCalledWith(201);
            expect(mockedResponse.json).toHaveBeenCalledWith({
                token: mockToken,
                userId: mockTalent._id,
            });
        });

    });

    describe('signIn', () => {
        it('should sign in a talent and return a token', async () => {
            const reqBody = {
                email: 'john@example.com',
                password: 'password123',
            };
            const hashedPassword = 'hashedPassword123';
            const mockTalent = new Talent({
                name: 'John Doe',
                email: reqBody.email,
                hashedPassword,
            });
            const mockToken = 'mockToken123';

            Talent.findOne = jest.fn().mockResolvedValueOnce(mockTalent);
            bcrypt.compare = jest.fn().mockResolvedValueOnce(true);
            jwt.sign = jest.fn().mockReturnValueOnce(mockToken);

            mockedRequest.body = reqBody;

            await signIn(mockedRequest as Request, mockedResponse as Response);

            expect(Talent.findOne).toHaveBeenCalledWith({ email: reqBody.email });
            expect(bcrypt.compare).toHaveBeenCalledWith(
                reqBody.password,
                mockTalent.hashedPassword
            );
            expect(jwt.sign).toHaveBeenCalledWith(
                { userId: mockTalent._id },
                expect.any(String),
                { expiresIn: '1h' }
            );
            expect(mockedResponse.json).toHaveBeenCalledWith({
                token: mockToken,
                userId: mockTalent._id,
            });
        });
    });
});

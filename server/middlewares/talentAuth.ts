import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { CustomError } from '../errors/customError';
import Talent from '../models/talentModel';
import { Talent as TT } from '../interfaces/talentInterface';
export const isTalentAuthenticated = async (
    req: Request & { talent: TT },
    res: Response,
    next: NextFunction,
): Promise<undefined> => {
    try {
        const authHeader = req.header('Authorization');

        if (!authHeader)
            throw new CustomError('Authorization header required', 400);

        let token = authHeader.split(' ')[1];
        if (!token)
            throw new CustomError(
                'invalid token, format must be Bearer <accessToken>',
                400,
            );
        token = token.trim();
        const secret = process.env.JWT_SECRET ?? 'default';

        const info = (await jwt.verify(token, secret)) as JwtPayload & {
            email: string;
        };

        const talent = await Talent.findOne({ email: info.email });

        if (!talent) throw new CustomError('Unauthorized', 401);

        req.talent = talent;
        next();
    } catch (err) {
        next(err);
    }
};

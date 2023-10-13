/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request, Response, NextFunction } from 'express';
export class CustomError extends Error {
    statusCode: number;
    constructor(message: string, status: number) {
        super(message);
        this.statusCode = status ?? 400;
    }
}

// custom error handler
export const errorHandler = (
    err: Error,
    res: Response,
    req?: Request,
    next?: NextFunction
) => {
    if (err instanceof CustomError) {
        const message = err.message;
        const statusCode = err.statusCode;
        console.log(message);
        return res.status(statusCode).json({ error: message, statusCode });
    }
    console.log(err.message);
    return res
        .status(500)
        .json({ error: 'Server Error: something went wrong', statusCode: 500 });
};

export const handleError = (error: Error, res: Response) => {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
};

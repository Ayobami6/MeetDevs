/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';

// type generics
export type GenericRequest<T> = Request & {
    body: T;
};

export type GenericResponse<T, U> = Response & {
    text: U;
};

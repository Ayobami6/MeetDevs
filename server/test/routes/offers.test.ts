/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'supertest';
import express from 'express';
import { connectDB, disconnectDB, dropCollection } from '../dbTestConnection';
import { GenericResponse } from '../../generics/types';
import offerRoutes from '../../routes/offerRoutes';

import OfferModel from '../../models/offerModel';
import { Offer, ResponseDocument } from '../../interfaces/offerInterface';

describe('test offer endpoints', () => {
    let app;
    beforeAll(async () => {
        await connectDB();
    });
    beforeEach(async () => {
        app = express();
        await app.use(express.json());
        await app.use('/offers', offerRoutes);
    });
    afterAll(async () => {
        await disconnectDB();
    });
    afterEach(async () => {
        await dropCollection('offers');
    });

    it('test get all offers /offers', async () => {
        const res: GenericResponse<ResponseDocument, string> =
            await request(app).get('/offers');
        console.log(res.text);
        expect(res.statusCode).toEqual(200);
        expect(JSON.parse(res.text)[0]).toHaveProperty('_id');
    });
});

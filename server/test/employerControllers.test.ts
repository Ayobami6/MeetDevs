import request from 'supertest';
import { connectDB, disconnectDB } from './dbTestConnection';
import dotenv from 'dotenv';
import app from '../index';
import Employer from '../models/employerModel';

dotenv.config();

beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    await disconnectDB();
});

describe('test employer signup', () => {
    it('Should create a new employer', async () => {
        const data = {
            name: 'Test Employer',
            email: 'test@gmail.com',
            password: 'testUser123',
        };

        const res = await request(app)
            .post('/employers/login')
            .send(data)
            .expect(201);
        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('data');
    });
});

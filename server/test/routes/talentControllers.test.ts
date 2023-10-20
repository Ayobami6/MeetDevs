import request from 'supertest';
import express from 'express';
import { connectDB, disconnectDB, dropDB } from '../dbTestConnection';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Talent from '../../models/talentModel';
import talentRoutes from '../../routes/talentRoute';

dotenv.config();

beforeAll(async () => {
    await connectDB();
}, 10000);

afterAll(async () => {
    await dropDB();
    await disconnectDB();
}, 10000);

describe('Authentication TalentController Tests', () => {
    let app;
    beforeEach(async () => {
        app = express();
        await app.use(express.json());
        await app.use('/talents', talentRoutes);
    }, 10000);
    beforeAll(async () => {
        const talentData = {
            name: 'Test User',
            email: 'test@example.com',
            hashedPassword: await bcrypt.hash('testpassword', 10),
        };

        const talent = new Talent(talentData);
        await talent.save();
    }, 10000);

    it('should sign up a new talent', async () => {
        const res = await request(app).post('/talents/signup').send({
            name: 'New Talent',
            email: 'newtalent@example.com',
            password: 'newpassword',
        });
        expect(JSON.parse(res.text)).toHaveProperty('token');
        expect(JSON.parse(res.text)).toHaveProperty('newTalent');
    }, 10000);

    it('should prevent signing up with an existing email', async () => {
        const res = await request(app)
            .post('/talents/signup')
            .send({
                email: 'test@example.com',
                password: 'testpassword',
            })
            .expect(400);

        expect(JSON.parse(res.text)).toHaveProperty(
            'Message',
            'Email already in use'
        );
    }, 10000);

    it('should sign in a user', async () => {
        const res = await request(app)
            .post('/talents/signin')
            .send({ email: 'test@example.com', password: 'testpassword' })
            .expect(200);

        expect(JSON.parse(res.text)).toHaveProperty('token');
        expect(JSON.parse(res.text)).toHaveProperty('talent');
    }, 10000);

    it('should prevent signing in with invalid credentials', async () => {
        const res = await request(app)
            .post('/talents/signin')
            .send({ email: 'test@example.com', password: 'wrongpassword' })
            .expect(401);

        expect(JSON.parse(res.text)).toHaveProperty(
            'message',
            'Invalid credentials'
        );
    },10000);
});

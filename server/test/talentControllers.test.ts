import request from 'supertest';
import { connectDB, disconnectDB } from './dbTestConnection';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import app from '../index';
import Talent from '../models/talentModel';

dotenv.config();

beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    await disconnectDB();
});

describe('Authentication TalentController Tests', () => {
    beforeAll(async () => {
        const talentData = {
            name: 'Test User',
            email: 'test@example.com',
            hashedPassword: await bcrypt.hash('testpassword', 10),
        };

        const talent = new Talent(talentData);
        await talent.save();

        await request(app)
            .post('/signin')
            .send({ email: 'test@example.com', password: 'testpassword' });
    });

    it('should sign up a new talent', async () => {
        const res = await request(app)
            .post('/signup')
            .send({ name: 'New Talent', email: 'newtalent@example.com', password: 'newpassword' })
            .expect(201);

        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('userId');
    });

    it('should prevent signing up with an existing email', async () => {
        const res = await request(app)
            .post('/signup')
            .send({ name: 'Existing Talent', email: 'test@example.com', password: 'testpassword' })
            .expect(400);

        expect(res.body).toHaveProperty('message', 'Email already in use');
    });

    it('should sign in a user', async () => {
        const res = await request(app)
            .post('/signin')
            .send({ email: 'test@example.com', password: 'testpassword' })
            .expect(200);

        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('userId');
    });

    it('should prevent signing in with invalid credentials', async () => {
        const res = await request(app)
            .post('signin')
            .send({ email: 'test@example.com', password: 'wrongpassword' })
            .expect(401);

        expect(res.body).toHaveProperty('message', 'Invalid credentials');
    });
});

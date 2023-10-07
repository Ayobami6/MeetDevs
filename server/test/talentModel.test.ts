import { connectDB, disconnectDB } from './dbTestConnection';
import TalentModel from '../models/talentModel';
import { Talent } from '../interfaces/talentInterface';

describe('test Talent Model', () => {
    beforeAll(async () => {
        await connectDB();
    });
    afterAll(async () => {
        await disconnectDB();
    });
    it('create new talent', async () => {
        const mockData: Talent = {
            name: 'Test',
            email: 'test@test.dev',
            hashedPassword: 'secret',
            hasOffer: false,
            rank: 0,
        };
        const newTalent = await TalentModel.create({ ...mockData });
        expect(newTalent._id).toBeDefined();
        expect(newTalent.name).toBe(mockData.name);
        expect(newTalent.email).toBe(mockData.email);
    });
});

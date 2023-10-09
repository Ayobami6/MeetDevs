import { connectDB, disconnectDB } from '../dbTestConnection';
import EmployerModel from '../../models/employerModel';
import { Employer } from '../../interfaces/employerInterface';

describe('test Employer Model', () => {
    beforeAll(async () => {
        await connectDB();
    });
    afterAll(async () => {
        await disconnectDB();
    });
    it('create new talent', async () => {
        const mockData: Employer = {
            name: 'Test',
            email: 'test@test.dev',
            password: 'secret',
            createdAt: new Date(),
        };
        const newEmployer = await EmployerModel.create({ ...mockData });
        expect(newEmployer._id).toBeDefined();
        expect(newEmployer.name).toBe(mockData.name);
        expect(newEmployer.email).toBe(mockData.email);
    });
});

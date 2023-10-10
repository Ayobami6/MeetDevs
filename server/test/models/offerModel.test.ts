import { connectDB, disconnectDB } from '../dbTestConnection';
import OfferModel from '../../models/offerModel';
import { Offer } from '../../interfaces/offerInterface';

describe('test offer Model', () => {
    beforeAll(async () => {
        await connectDB();
    });
    afterAll(async () => {
        await disconnectDB();
    });
    it('create new talent', async () => {
        const mockData: Offer = {
            talentId: 'Test-id',
            employerId: 'test-id2',
            title: 'full-stack dev',
            createdAt: new Date(),
        };
        const newOffer = await OfferModel.create({ ...mockData });
        expect(newOffer._id).toBeDefined();
        expect(newOffer.talentId).toBe(mockData.talentId);
        expect(newOffer.employerId).toBe(mockData.employerId);
        expect(newOffer.accepted).toBe(false);
    });
});

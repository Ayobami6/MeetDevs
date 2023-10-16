import express from 'express';
import {
    getAllOffers,
    createOffer,
    getOffer,
    updateOffer,
    deleteOffer,
    getOfferByTalent,
    getOfferByEmployer,
} from '../controllers/offerController';

const router = express.Router();

router.get('/', getAllOffers);
router.post('/', createOffer);
router.get('/:id', getOffer);
router.get('/talent/:talentId', getOfferByTalent);
router.get('/employer/:employerId', getOfferByEmployer);
router.patch('/:id', updateOffer);
router.delete('/:id', deleteOffer);

export default router;

import express from 'express';
import {
    getAllOffers,
    createOffer,
    getOffer,
    updateOffer,
    deleteOffer,
} from '../controllers/offerController';

const router = express.Router();

router.get('/', getAllOffers);
router.post('/', createOffer);
router.get('/:id', getOffer);
router.put('/:id', updateOffer);
router.delete('/:id', deleteOffer);

export default router;

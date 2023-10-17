import express from 'express';
import {
    addCertification,
    getACertification,
    getAllCertification,
    updateCertification,
    deleteCertification,
    getCertificationByTalent,
} from '../controllers/certificationController';

const router = express.Router();

router.post('/', addCertification);
router.get('/:id', getACertification);
router.get('/', getAllCertification);
router.patch('/:id', updateCertification);
router.delete('/:id', deleteCertification);
router.get('/talent/:talentId', getCertificationByTalent);

export default router;

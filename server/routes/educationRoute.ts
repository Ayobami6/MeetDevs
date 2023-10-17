import express from 'express';
import {
    addEducation,
    getAnEducation,
    getAllEducation,
    updateEducation,
    deleteEducation,
    getAnEducationByTalent,
} from '../controllers/educationController';

const router = express.Router();

router.post('/', addEducation);
router.get('/:id', getAnEducation);
router.get('/', getAllEducation);
router.patch('/:id', updateEducation);
router.delete('/:id', deleteEducation);
router.get('/talent/:talentId', getAnEducationByTalent);

export default router;

import express from 'express';
import {
    addExperience,
    getAllExperience,
    getExperience,
    updateExperience,
    deleteExperience,
} from '../controllers/experienceController';

const router = express.Router();

router.post('/', addExperience);
router.get('/', getAllExperience);
router.get('/:id', getExperience);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);

export default router;

import express from 'express';
import {
    addExperience,
    getAllExperience,
    getExperience,
    updateExperience,
    deleteExperience,
    getExperienceByTalent,
} from '../controllers/experienceController';

const router = express.Router();

router.get('/', getAllExperience);
router.post('/', addExperience);
router.get('/:id', getExperience);
router.put('/:id', updateExperience);
router.patch('/:id', updateExperience);
router.delete('/:id', deleteExperience);
router.get('/talent/:talentId', getExperienceByTalent);

export default router;

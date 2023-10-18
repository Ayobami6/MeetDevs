import express from 'express';
import {
    addSkill,
    getASkill,
    getAllSkill,
    updateSkill,
    deleteSkill,
    getASkillByTalent,
} from '../controllers/skillController';

const router = express.Router();

router.post('/', addSkill);
router.get('/:id', getASkill);
router.get('/', getAllSkill);
router.put('/:id', updateSkill);
router.patch('/:id', updateSkill);
router.delete('/:id', deleteSkill);
router.get('/talent/:talentId', getASkillByTalent);

export default router;

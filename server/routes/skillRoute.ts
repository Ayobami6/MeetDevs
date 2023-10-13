import express from 'express';
import {
    addSkill,
    getASkill,
    getAllSkill,
    updateSkill,
    deleteSkill,
} from '../controllers/skillController';

const router = express.Router();

router.post('/', addSkill);
router.get('/:id', getASkill);
router.get('/', getAllSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;

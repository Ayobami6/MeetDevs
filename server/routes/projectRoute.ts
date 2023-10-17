import express from 'express';
import {
    addProject,
    getAProject,
    getAllProject,
    updateProject,
    deleteProject,
    getAProjectByTalent,
} from '../controllers/projectController';

const router = express.Router();

router.post('/', addProject);
router.get('/:id', getAProject);
router.get('/', getAllProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/talent/:talentId', getAProjectByTalent);

export default router;

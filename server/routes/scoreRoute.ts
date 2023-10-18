import express from 'express';
import { updateScore, getScores } from '../controllers/scoreController';

const router = express.Router();

router.put('/:talentId', updateScore);
router.get('/', getScores);

export default router;

import express from 'express';
import { createEmployer } from '../controllers/employerController';

const router = express.Router();

router.post('/create', createEmployer);

export default router;

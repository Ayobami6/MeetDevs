import express from 'express';
import {
    createEmployer,
    employerSignup,
    employerLogin,
} from '../controllers/employerController';

const router = express.Router();

router.post('/create', createEmployer);
router.post('/signup', employerSignup);
router.post('/login', employerLogin);

export default router;

import express from 'express';
import {
    employerSignup,
    employerLogin,
} from '../controllers/employerController';

const router = express.Router();

router.post('/signup', employerSignup);
router.post('/login', employerLogin);

export default router;

import { Router } from 'express';
import { allTalents } from '../controllers/talentController';

export const talentRoutes = Router();

talentRoutes.get('/', allTalents);

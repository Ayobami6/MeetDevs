import { Router } from 'express';
import { allTalents, getTalentById } from '../controllers/talentController';

export const talentRoutes = Router();

talentRoutes.get('/', allTalents);
talentRoutes.get('/:id', getTalentById);

// TODO: add talent auth middleware before these routes

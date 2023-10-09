import { Router } from 'express';
import {
    allTalents,
    deleteTalent,
    getCurrentTalent,
    getTalentById,
    updateTalent,
} from '../controllers/talentController';
import { isTalentAuthenticated } from '../middlewares/talentAuth';

export const talentRoutes = Router();
// TODO: add talent auth middleware before these routes
talentRoutes.use('/me', isTalentAuthenticated);

talentRoutes.get('/me', getCurrentTalent);
talentRoutes.put('/me', updateTalent);
talentRoutes.delete('/me', deleteTalent);

talentRoutes.get('/', allTalents);
talentRoutes.get('/:id', getTalentById);

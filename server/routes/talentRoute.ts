import { Router } from 'express';
import {
    allTalents,
    deleteTalent,
    getTalentById,
    updateTalent,
} from '../controllers/talentController';
import { isTalentAuthenticated } from '../middlewares/talentAuth';

export const talentRoutes = Router();
talentRoutes.use(isTalentAuthenticated);

talentRoutes.put('/:id', updateTalent);
talentRoutes.delete('/:id', deleteTalent);

talentRoutes.get('/', allTalents);
talentRoutes.get('/:id', getTalentById);

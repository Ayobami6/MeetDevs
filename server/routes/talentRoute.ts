import { Router } from 'express';
import { signIn, signUp } from '../controllers/talentController';
import {
    allTalents,
    deleteTalent,
    getTalentById,
    updateTalent,
    updatePatchTalent,
} from '../controllers/talentController';
// import { isTalentAuthenticated } from '../middlewares/talentAuth';

const talentRoutes = Router();

talentRoutes.post('/signup', signUp);
talentRoutes.post('/signin', signIn);

// talentRoutes.use(isTalentAuthenticated);

talentRoutes.put('/:id', updateTalent);
talentRoutes.patch('/:id', updatePatchTalent);
talentRoutes.delete('/:id', deleteTalent);

talentRoutes.get('/', allTalents);
talentRoutes.get('/:id', getTalentById);

export default talentRoutes;

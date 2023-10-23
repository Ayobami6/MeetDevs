import { Router } from 'express';
import paginateTalents from '../pagination/talentPagination';

const talentPaginationRoute = Router();

talentPaginationRoute.get('/talents', paginateTalents);

export default talentPaginationRoute;

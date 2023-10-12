import { Router }from 'express';
import { Request, Response } from 'express';
import paginateTalents from '../pagination/talentPagination';

const talentPaginationRoute = Router();

talentPaginationRoute.get('/talents', (req: Request, res: Response) => {
  paginateTalents(req, res);
});

export default talentPaginationRoute;

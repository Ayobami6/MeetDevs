import { errorHandler } from '../errors/customError';
import { Request, Response } from 'express';
import Talent from '../models/talentModel';

/**
 * Paginates the number of talents displayed per page to 12
 * @param req
 * @param res json containing 12 talents, current page number
 * total number of pages and talents.
 */
const paginateTalents = async (req: Request, res: Response) => {
  const rawPage = req.query.page as string | undefined;
  const page = rawPage ? parseInt(rawPage) : 1; // Current page, default to 1
  const perPage = 9; // Number of talents per page

  try {
    const totalTalents = await Talent.countDocuments();
    const talents = await Talent.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.json({
      totalTalents,
      currentPage: page,
      totalPages: Math.ceil(totalTalents / perPage),
      talentsPerPage: perPage,
      talents,
    });
  } catch (error) {
    errorHandler(error, res, req, error.NextFunction);
  }
};

export default paginateTalents;

import { errorHandler } from '../errors/customError';
import { Request, Response } from 'express';
import Talent from '../models/talentModel';

/**
 * Paginates the number of talents displayed per page to 12
 * @param req
 * @param res json containing 12 talents, current page number
 * total number of pages and talents.
 */
<<<<<<< HEAD
const paginateTalents = async (req: Request, res: Response) => {
=======
const paginateTalents = async (
    req: Request,
    res: Response
) => {
>>>>>>> 3be3c97 (Feat: Talent pagination)
    const rawPage = req.query.page as string | undefined;
    const page = rawPage ? parseInt(rawPage) : 1; // Current page, default to 1
    const perPage = 12; // Number of talents per page

    try {
        const totalTalents = await Talent.countDocuments();
<<<<<<< HEAD
        const talents = await Talent.find()
=======
        const talents = await Talent
            .find()
>>>>>>> 3be3c97 (Feat: Talent pagination)
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.json({
            totalTalents,
            currentPage: page,
            totalPages: Math.ceil(totalTalents / perPage),
            talents,
        });
    } catch (error) {
<<<<<<< HEAD
        errorHandler(error, res, req, error.NextFunction);
=======
        errorHandler(error, req, res, error.NextFunction);
>>>>>>> 3be3c97 (Feat: Talent pagination)
    }
};

export default paginateTalents;

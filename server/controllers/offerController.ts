import OfferModel from '../models/offerModel';
import { ResponseDocument } from '../interfaces/offerInterface';
import { GenericRequest, GenericResponse } from '../generics/types';

// create offer controller
export const createOffer = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const offerData: T = req.body;
        const createdOffer = await OfferModel.create({ ...offerData });
        res.status(201).json({
            ...createdOffer.toJSON(),
            links: [
                { rel: 'self', href: `/offers/${createdOffer._id}` },
                { rel: 'talent', href: `/talents/${createdOffer.talentId}` },
                {
                    rel: 'employer',
                    href: `/employers/${createdOffer.employerId}`,
                },
                {
                    rel: 'collection',
                    href: '/offers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// get all offers
export const getAllOffers = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const offers = await OfferModel.find();
        res.status(200).json({
            offers,
            links: [
                { rel: 'self', href: '/offers' },
                { rel: 'talent', href: '/talents' },
                {
                    rel: 'employer',
                    href: '/employers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// get an offer
export const getOffer = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const { id } = req.params;
        const offer = await OfferModel.findById(id);
        if (!offer) return res.status(404).json({ message: 'Offer not found' });
        res.status(200).json({
            ...offer.toJSON(),
<<<<<<< HEAD
            links: [
                { rel: 'self', href: '/offers' },
                { rel: 'talent', href: '/talents' },
                {
                    rel: 'employer',
                    href: '/employers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// get offer by talentId
export const getOfferByTalent = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>,
) => {
    try {
        const { talentId } = req.params;
        const offers = await OfferModel.find({ talentId });
        res.status(200).json({
            offers,
            links: [
                { rel: 'self', href: '/offers' },
                { rel: 'talent', href: '/talents' },
                {
                    rel: 'employer',
                    href: '/employers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};


// get offer by employerId
export const getOfferByEmployer = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>,
) => {
    try {
        const { employerId } = req.params;
        const offers = await OfferModel.find({ employerId });
        res.status(200).json({
            offers,
=======
>>>>>>> eb5e484 (test: fix failed test for talentcontrollers)
            links: [
                { rel: 'self', href: '/offers' },
                { rel: 'talent', href: '/talents' },
                {
                    rel: 'employer',
                    href: '/employers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// get offer by talentId
export const getOfferByTalent = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const { talentId } = req.params;
        const offers = await OfferModel.find({ talentId });
        res.status(200).json({
            offers,
            links: [
                { rel: 'self', href: '/offers' },
                { rel: 'talent', href: '/talents' },
                {
                    rel: 'employer',
                    href: '/employers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// get offer by employerId
export const getOfferByEmployer = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const { employerId } = req.params;
        const offers = await OfferModel.find({ employerId });
        res.status(200).json({
            offers,
            links: [
                { rel: 'self', href: '/offers' },
                { rel: 'talent', href: '/talents' },
                {
                    rel: 'employer',
                    href: '/employers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// update offer
export const updateOffer = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const offer = await OfferModel.findByIdAndUpdate(id, data);
        if (!offer) return res.status(404).json({ message: 'Offer not found' });
        res.status(200).json({
            offer,
            links: [
                { rel: 'self', href: '/offers' },
                { rel: 'talent', href: '/talents' },
                {
                    rel: 'employer',
                    href: '/employers',
                },
            ],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// delete offer
export const deleteOffer = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument, string>
) => {
    try {
        const { id } = req.params;
        const offer = await OfferModel.findByIdAndDelete(id);
        if (!offer) return res.status(404).json({ message: 'Offer not found' });
        res.status(200).json({
            message: 'Offer Successfully Deleted!',
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

import { Request, Response } from 'express';
// import { Document } from 'mongoose';
import OfferModel from '../models/offerModel';
import { Offer } from '../interfaces/offerInterface';

// type generics
type GenericRequest<T> = Request & {
    body: T;
};

type GenericResponse<T> = Response<T>;

interface ResponseDocument extends Offer {
    links?: Array<object>;
    message?: string;
}
// create offer controller
export const createOffer = async <T>(
    req: GenericRequest<T>,
    res: GenericResponse<ResponseDocument>
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
    res: GenericResponse<ResponseDocument>
) => {
    try {
        const offers = await OfferModel.find();
        res.status(200).json({
            ...offers,
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
    res: GenericResponse<ResponseDocument>
) => {
    try {
        const { id } = req.params;
        const offer = await OfferModel.findById(id);
        if (!offer) return res.status(404).json({ message: 'Offer not found' });
        res.status(200).json({
            ...offer,
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
    res: GenericResponse<ResponseDocument>
) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const offer = await OfferModel.findByIdAndUpdate(id, data);
        if (!offer) return res.status(404).json({ message: 'Offer not found' });
        res.status(200).json({
            ...offer,
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
    res: GenericResponse<ResponseDocument>
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

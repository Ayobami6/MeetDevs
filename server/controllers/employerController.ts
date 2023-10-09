import Employer from '../models/employerModel';

export const createEmployer = async (req, res) => {
    const employerData = req.body;
    try {
        const employer = await Employer.create({
            ...employerData,
            createdAt: new Date().toISOString(),
        });
        res.status(201).json(employer);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server error');
    }
};

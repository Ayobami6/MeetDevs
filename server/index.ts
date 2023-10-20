import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import employerRoutes from './routes/employerRoute';
import offerRoutes from './routes/offerRoutes';
import talentRoutes from './routes/talentRoute';
import skillRoute from './routes/skillRoute';
import experienceRoute from './routes/experienceRoute';
import educationRoute from './routes/educationRoute';
import projectRoute from './routes/projectRoute';
import certificationRoute from './routes/certificationRoute';
import scoreRoute from './routes/scoreRoute';

import talentPaginationRoute from './routes/talentPaginationRoute';
// import { errorHandler } from './errors/customError';

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPwd = process.env.DB_PWD;
const dbConnString = `mongodb+srv://${dbUsername}:${dbPwd}@meetdevcluster.udvey1i.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const app = express();

const PORT: number = 3000;
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/employers', employerRoutes);
app.use('/offers', offerRoutes);
app.use('/talents', talentRoutes);
app.use('/skills', skillRoute);
app.use('/experiences', experienceRoute);
app.use('/educations', educationRoute);
app.use('/projects', projectRoute);
app.use('/certifications', certificationRoute);
app.use('/scores', scoreRoute);
app.use('/api', talentPaginationRoute); //paginated api for talents

// misc
app.get('/', (req, res) => {
    res.send('Welcome to MeetDevs');
});

// app.use(errorHandler);

mongoose
    .connect(dbConnString, { useNewUrlParser: true } as ConnectOptions)
    .then(() => {
        console.log('Database Connected');
        app.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

export default app;

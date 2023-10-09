import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import employerRoutes from './routes/employerRoute';
import offerRoutes from './routes/offerRoutes';
import talentRoutes from './routes/talentRoute';

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPwd = process.env.DB_PWD;
const dbConnString = `mongodb+srv://${dbUsername}:${dbPwd}@meetdevcluster.udvey1i.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const app = express();

const PORT: number = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/employers', employerRoutes);
app.use('/offers', offerRoutes);
app.use('/talents', talentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to MeetDevs');
});

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

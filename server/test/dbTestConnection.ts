import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbName = process.env.TEST_DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPwd = process.env.DB_PWD;
const dbConnString = `mongodb+srv://${dbUsername}:${dbPwd}@meetdevcluster.udvey1i.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const connectDB = async () => {
    try {
        await mongoose.connect(dbConnString, { autoCreate: true });
    } catch (error) {
        console.log(error);
    }
};

export const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

export const dropDB = async () => {
    try {
        await mongoose.connection.db.dropDatabase();
    } catch (error) {
        console.log(error);
    }
};

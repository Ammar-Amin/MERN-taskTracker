import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

export const Connection = () => {

    let MongodbURI = `mongodb+srv://${username}:${password}@taskmanager.gekyael.mongodb.net/`

    mongoose.connect(MongodbURI)

    mongoose.connection.on('connected', function () {
        console.log('Database Connected Successfully');
    })
    mongoose.connection.on('disconnected', function () {
        console.log('Database Disconnected');
    })
    mongoose.connection.on('error', function () {
        console.log('Error while connecting to Database', error.message);
    })

}

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const db = () => {

    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongo DB is Running")
    })
    .catch((err)=> {
        console.log('Error in db connection')
    })
}

export default db;
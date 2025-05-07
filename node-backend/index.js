import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import db from './utils/db.js';
// import all routes
import userRoutes from './routes/user.routes.js'; 

dotenv.config();

const app = express();


app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods:['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-type', 'Authorization']
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Landing Page');
})

db();
app.use('/api/v1/users', userRoutes);
app.listen(port, () => {
    console.log(port, 'Running on local machine')});
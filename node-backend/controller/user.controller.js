import User from "../model/User.model.js";
import crypto from 'crypto';
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import bcrypt from "bcryptjs";
// import { json } from "stream/consumers";
import jwt from 'jsonwebtoken'

dotenv.config()

const registerUser = async (req, res) => {
    // 1-get data
    // 2-validate data
    // 3-check if user already exists
    // 4-create user in database
    // 5-create a verification token
    // 6-save token in database
    // 7-send email as token to user
    // send success status to user 
    // res.send('register')
    const {name, email, password} = req.body;

    // check if user filled all fields
    if(!name, !email, !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    // check if user filled all fields
    
    try {
        // check if user already registred
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(201).json({
                message: "User already registered"
            })
        }
        // check if user already registred

        // create a user in database
        const user = await User.create({
            name, email, password
        })
        console.log(user)
        // create a user in database
        
        // User not created in database
        if(!user){
            return res.status(400).json({
                message: "User not created in database"
            })
        }
        // User not created in database

        // create a verification token
        const token = crypto.randomBytes(32).toString("hex");
        console.log(token, "token")
        // create a verification token

        // save token in database
        user.verificationToken = token;
        await user.save()
        // save token in database 


        // send email  
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USERNAME,
              pass: process.env.MAILTRAP_PASSWORD,
            },
          });

          const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL , // sender address
            to: User.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: `Please click on following link
            ${process.env.BASE_URL}/api/v1/users/verify${token}
            `, // plain text body
            html: "<b>Hello world?</b>", // html body
          }

          await transporter.sendMail(mailOption)

          res.status(200).json({
            message: "Message sent successfully",
            success: true
          })
        // send email  

    } catch (error) {
        res.status(400).json({
            message: 'user not registered successfully',
            error,
            success: false
        })
    }
    console.log(name, email, password)
};


const verifyUser = async (req, res) => {
    // get Token from url
    const {token} = req.params
    // validate token
    console.log(token, "token");
    if(!token){
        res.status(400).json({
            message: "Invalid token"
        })
    }

    try {
            // find user based on token
   const user = await User.findOne({verificationToken: token});
   if(!user) {
    res.status(400).json({
        message: "invalid token"
    })
   }
    // if not
    // set isverified field to true
    user.isVerified = true;
    // remove verification token
    user.verificationToken = undefined;
    // save
    await user.save()
    // return response

    res.status(200).json({
        message: "user verified successfully",
        success: true
    });

    } catch (error) {
        res.status(400).json({
            message: 'User not verified',
            error, 
            success: false,
        })
    }


}

const login = async (req, res) => {
    const {email, password} = req.body;
    
    if(!email || !password) {
        return res.status(200).json({
            message: 'All  Fields are required'
        })
    }

    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.status(200).json({
                message: "Invalid Email or password "
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        console.log(isMatch);

        if(!isMatch){
            return res.status(400).json({
                message: "Email or password invalid"
            })        
        }

        const token = jwt.sign(
            {id: user._id, role: user.role},
            'shh',{
                expiresIn: '24h'
            }
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000
        }
        
        res.cookie("test", token, {cookieOptions});

        res.status(200).json({
            success: true,
            message: "Login Successfull",
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Login failure",
            error
        })
        
    }
}

export {registerUser, verifyUser, login}  
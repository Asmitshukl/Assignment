import  Express  from "express"
import  UserModel   from "../schema/UserModels.js"
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken";
import { LoginValidation, UserValidataion } from "../zod/check.js";

export const Authrouter =Express.Router();

const JWT_SECRET=process.env.JWT_SECRET;

Authrouter.post("/register",async(req,res)=>{
    const parseddata=UserValidataion.parse(req.body);
    const name=parseddata.name;
    const email=parseddata.email;
    const password=parseddata.password;
    const hashpassword= await bcrypt.hash(password,5);
    try{
        const R=await UserModel.create({
            name,
            email,
            password:hashpassword
        })
        if(R.errors){
            res.json({R})
        }
        res.json({
            message:"Your data has been stored"
        })
    }catch(e){
        console.error("Some error occured");
        res.status(400).json({
            message:"Kuch toh gadbad hai re baba"
        })
    }
})

Authrouter.post("/login",async(req,res)=>{
    const parseddata=LoginValidation.parse(req.body);
    const email=parseddata.email;
    const password=parseddata.password
    try{
        const User=await UserModel.findOne({
            email:email
        })
        const founduser=await bcrypt.compare(password,User?.password as string);

        const token=jwt.sign({
            email:email
        },JWT_SECRET as string);

        localStorage.setItem("token",token);
        return res.json({token});
        
    }catch(e){
        console.error("there is some errror occured");
        res.status(400).json({
            message:"Kuch toh gadbad hai daya"
        })
    }
})
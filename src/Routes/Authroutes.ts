import  Express  from "express"
import  UserModel   from "../schema/UserModels.js"
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken";
import { LoginValidation, UserValidataion } from "../zod/check.js";

export const Authrouter =Express.Router();

const JWT_SECRET=process.env.JWT_SECRET;

Authrouter.post("/register",async(req,res)=>{
    try{
    const parseddata=UserValidataion.parse(req.body);
    const name=parseddata.name;
    const email=parseddata.email;
    const password=parseddata.password;
    const hashpassword= await bcrypt.hash(password,5);
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
    try{
    const parseddata=LoginValidation.parse(req.body);
    const email=parseddata.email;
    const password=parseddata.password

        const User=await UserModel.findOne({
            email:email
        })
        if (!User) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const founduser=await bcrypt.compare(password,User?.password as string);

        if(founduser){
        const token=jwt.sign({
            id:User?.id
        },JWT_SECRET as string);

        // localStorage.setItem("token",token);
        return res.json({token});
        }
        
    }catch(e){
        console.log(e);
        res.status(400).json({
            message:"Kuch toh gadbad hai daya"
        })
    }
})
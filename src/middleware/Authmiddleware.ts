import type { Request , Response , NextFunction } from "express";
import Jwt, { type JwtPayload }  from "jsonwebtoken";

const JWT_SECRET=process.env.JWT_SECRET as string;


export default function authmiddleware(req:Request,res:Response,next:NextFunction){
    const token =  req.headers["authorization"] || "";
    
    const decoded=Jwt.verify(token,JWT_SECRET) as JwtPayload;

    if(decoded){
        req.userid=decoded.id
        next();
    }else{
        res.status(403).json({
            message:"unauthorized user"
        })
    }
}
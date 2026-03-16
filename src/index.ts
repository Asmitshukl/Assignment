import Express from "express"
import { Authrouter } from "./Routes/Authroutes.js";
import { connectDB } from "./db/database.js"

export const app =Express();
app.use(Express.json());

connectDB();


app.use("/auth",Authrouter)

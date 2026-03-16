import Express from "express";
import { Authrouter } from "./Routes/Authroutes.js";
import { connectDB } from "./db/database.js";
import { TaskRouter } from "./Routes/Taskroutes.js";
export const app = Express();
app.use(Express.json());
connectDB();
app.use("/auth", Authrouter);
app.use("/api", TaskRouter);
//# sourceMappingURL=index.js.map
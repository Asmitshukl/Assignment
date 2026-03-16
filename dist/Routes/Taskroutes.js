import Express from "express";
import Taskmodel from "../schema/TaskModel.js";
import authmiddleware from "../middleware/Authmiddleware.js";
import { tasksvalidattion } from "../zod/check.js";
import mongoose from "mongoose";
export const TaskRouter = Express.Router();
TaskRouter.use(authmiddleware);
TaskRouter.post("/tasks", async (req, res) => {
    try {
        const parseddata = tasksvalidattion.parse(req.body);
        const title = parseddata.title;
        const description = parseddata.description;
        const status = parseddata.status;
        if (!req.userid) {
            res.json({ message: "Unauthorized" });
            return;
        }
        const task = await Taskmodel.create({
            _id: new mongoose.Types.ObjectId(req.userid),
            Title: title,
            Description: description,
            status,
            user: new mongoose.Types.ObjectId(req.userid)
        });
        return res.json({
            message: `task created ${task}`
        });
    }
    catch (e) {
        res.json({
            e
        });
    }
});
TaskRouter.get("/tasks", async (req, res) => {
    try {
        const status = req.body.status;
        const filter = { user: req.userid };
        if (status && typeof status === "string") {
            filter.status = status;
        }
        const tasks = await Taskmodel.find(filter);
        res.status(200).json({ tasks });
    }
    catch (e) {
        console.log(e);
        return res.json({
            message: "While getting the desired tasks some error occured"
        });
    }
});
TaskRouter.get("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Taskmodel.findById(id);
        if (!task) {
            return res.json({
                message: "couldnt find any task"
            });
        }
        if (task.user?.toString() !== req.userid) {
            return res.json({
                message: "Not a valid user"
            });
        }
        res.json({
            task
        });
    }
    catch (e) {
        console.log(e);
        return res.json({
            message: "There is some error occured"
        });
    }
});
TaskRouter.put("/tasks/:id", (req, res) => {
});
TaskRouter.delete("/tasks/:id", (req, res) => {
});
//# sourceMappingURL=Taskroutes.js.map
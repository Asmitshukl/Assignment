import Express from "express";
import Taskmodel from "../schema/TaskModel.js";
import authmiddleware from "../middleware/Authmiddleware.js";
import { tasksvalidattion } from "../zod/check.js";
import mongoose from "mongoose";
import { parse } from "node:path";
import UserModels from "../schema/UserModels.js";
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
            Title: title,
            Description: description,
            status,
            user: new mongoose.Types.ObjectId(req.userid)
        });
        await UserModels.findByIdAndUpdate(req.userid, {
            $push: { tasks: task._id }
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
TaskRouter.put("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Taskmodel.findById(id);
        if (!task) {
            return res.json({
                message: "Not available task"
            });
        }
        if (task.user?.toString() !== req.userid) {
            return res.json({
                message: "not a valid user"
            });
        }
        const parseddata = tasksvalidattion.partial().parse(req.body);
        const Title = parseddata.title;
        const Description = parseddata.description;
        const status = parseddata.status;
        const updatedtask = await Taskmodel.findByIdAndUpdate(id, {
            Title,
            Description,
            status
        });
        return res.json({
            message: "the changes have been made ",
            task: updatedtask
        });
    }
    catch (e) {
        console.log(e);
        return res.json({
            message: "Kyun itna gadbad karte ho daya"
        });
    }
});
TaskRouter.delete("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Taskmodel.findById(id);
        if (!task) {
            return res.json({
                message: "nothing founf"
            });
        }
        if (task.user?.toString() !== req.userid) {
            return res.json({
                message: "invalid user"
            });
        }
        const deleted = await Taskmodel.findByIdAndDelete(id);
        return res.json({
            message: `this task ${task} is deleted`
        });
    }
    catch (e) {
        console.log(e);
        return res.json({
            message: "There is some error"
        });
    }
});
//# sourceMappingURL=Taskroutes.js.map
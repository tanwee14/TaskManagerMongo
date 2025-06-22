import task from "../DB/models/task.js"
import { createCustomError } from "../errors/custom-error.js";
import asyncWrapper from "../middlewares/asyncWrapper.js";
import asyncWrapper from "../middlewares/asyncWrapper.js";

export const getAllTasks = asyncWrapper(
    async (req, res) => {
        const tasks = await task.find({});
        res.status(200).json({ tasks });
    }
);
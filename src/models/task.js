import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema ({
    task: String,
    completed: Boolean
})

export const Task = mongoose.model("Task", TaskSchema);
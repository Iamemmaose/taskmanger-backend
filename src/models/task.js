import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    task: {
      type: String,
      required: [true, "name must be provided"],
      trim: true,
      maxLength: [20, "must not be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export const Task = mongoose.model("Task", TaskSchema)
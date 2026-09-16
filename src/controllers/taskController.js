import { Task } from "../models/task.js"


export const getAllTask = ((req, res) => {
    res.json({
        message: "welcome to my Api"
    })
})
export const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}
export const getTask = ((req, res) => {
    res.json({ id: req.params.id })
})
export const updateTask = ((req, res) => {
    res.json({ id: req.params.id })
})
export const deleteTask = ((req, res) => {
    res.json({ id: req.params.id })
})
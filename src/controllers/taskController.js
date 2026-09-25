import { Task } from "../models/task.js"


export const getAllTask = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
            returnDocument: "after",
            runValidators: true
        })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const Task = require('../models/taskModel')
const mongoose = require('mongoose')

const getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
}

const createTask = async (req, res) => {
    const { title, time } = req.body

    try {
        const task = await Task.create({ title, time })
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error : "There is no such Task"})
    }

    const task = await Task.findByIdAndDelete(id)

    if (!task) {
        return res.status(404).json({ error : "There is no such Task"})
    }

    res.status(200).json(task)
}

const updateTask = async (req, res) => {
    const { id } = req.params
    const body = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error : "There is not such Task"})
    }

    const task = await Task.findByIdAndUpdate(id, body, { new : true})
    
    if (!task) {
        return res.status(404).json({ error : "There is not such Task"})
    }

    res.status(200).json(task)
}

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask
}
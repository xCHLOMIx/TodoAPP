const { getTasks, createTask, deleteTask, updateTask } = require('../controllers/taskControllers')
const express = require('express')
const router = express.Router()

router.get('', getTasks)
router.post('', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

module.exports = router
const express = require('express');
const router = express.Router();

const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/taskController');

// GET all tasks
router.get('/', getAllTasks);

// GET a single task by ID
router.get('/:id', getTask);

// POST a new task
router.post('/', createTask);

// PUT update a task by ID
router.put('/:id', updateTask);

// DELETE a task by ID
router.delete('/:id', deleteTask);


module.exports = router;
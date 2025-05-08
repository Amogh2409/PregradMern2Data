// inmemory database
let tasks = [
    { id: 1, title: 'React JS', completed: false,  },
    { id: 2, title: 'Learn MongoDB', completed: false, },
    { id: 3, title: 'Learn Express', completed: true, },
    { id: 4, title: 'Learn Node JS', completed: false, },
    { id: 5, title: 'Learn JavaScript', completed: true, },
    { id: 6, title: 'Learn TypeScript', completed: false, },
    { id: 7, title: 'Learn Python', completed: false, },
    { id: 8, title: 'Learn Java', completed: true, },
    { id: 9, title: 'Learn C++', completed: false, },
    { id: 10, title: 'Learn C#', completed: true, },
];


const generateID = () => tasks.length + 1;

const getAllTasks = (req, res) => {
    res.json(tasks);
}

const getTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
}

let createTask = (req, res) => {
    const {title, completed = false} = req.body;
    if(!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    const newTask = {
        id: generateID(),
        title,
        completed,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
}

const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);

    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const updateTask = {...tasks[taskIndex], ...req.body };
    tasks[taskIndex] = updateTask;
    res.json(updateTask);
}


const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.status(204).send("Task deleted successfully");

}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask

}

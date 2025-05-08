// Task Manager api 

// crud operations - create, read, update, delete
// moduler route
// middleware - express validator, cors, helmet, morgan, rate limiter
// array for now 


const express = require('express')
const app = express();
const PORT = 3000;
const logger = require('./utils/logger'); // Import the logger middleware
app.use(logger); // Use the logger middleware
app.use(express.json()) // to parse json data

// Import tasks 
const tasks = require('./routes/task');
app.use('/api/tasks', tasks);


app.use((req, res) =>{
    res.status(404).send('Route not found');
});

app.use((err, req, res, next) =>{
    console.error(err.stack); // log the error stack trace
    res.status(500).send("Internal Server Error"); // send a generic error message
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
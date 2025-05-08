const express = require('express');
const app = express(); // Create an instance of the Express application
const PORT = 3000;

app.use(express.json()); // This is going to parse the incoming request with JSON payloads
app.post('/', (req, res)=>{
    const {name} = req.body; // Destructure the name property from the request body;

    res.send(`Hello ${name}`); // Send a response with the name received in the request body
});

app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error); // Log any errors that occur while starting the server
    } else {
        console.log(`Server is running on port ${PORT} http://localhost:${PORT}`); // Log a message indicating that the server is running
    }
});
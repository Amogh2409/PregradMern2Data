const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express application
const PORT = 3000; // Define the port number for the server


// Basic Routing
app.get('/', (req, res) => {
    res.send('Hello World from Express!'); // Send a response when the root URL is accessed
});

app.get('/about', (req, res) => {
    res.send('About Page'); // Send a response when the /about URL is accessed
});


app.post('/submit', (req, res) => {
    const data = req.body; // Get the data from 
    res.json({ message: 'Data received', data }); // Send a JSON response with the received data

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT} http://localhost:${PORT}`); // Log a message indicating that the server is running
    } else {
        console.error('Error starting server:', error); // Log any errors that occur while starting the server
    }
});
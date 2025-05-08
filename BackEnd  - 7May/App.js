const express = require('express');
const app = express(); // Create an instance of the Express application
const PORT = 3000; // Define the port number for the server

const path = require('path'); // Import the path module for handling file paths

app.get('/files', (req, res) => {
    res.sendFile(path.join(__dirname, 'static-files', 'random.html')); // Serve the index.html file from the 'Files' directory when the '/files' route is accessed
});
app.use('/static', express.static(path.join(__dirname, 'static-files'))); // Serve static files from the 'Static Files' directory under the '/static' route

app.listen(PORT, (error)=> {
    if(!error){
        console.log(`Server is running on port ${PORT} http://localhost:${PORT}`); // Log a message indicating that the server is running
    }

    else{
        console.error('Error starting server:', error); // Log any errors that occur while starting the server
    }
})
// const http = require('http');

// // Create a simple HTTP server
// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.writeHead(200, {'Content-Type': 'text/plain'});
  
//   // Handle different URLs
//   if (req.url === '/') {
//     res.end('Hello! Welcome to your first Node.js server.\n');
//   } 
//   else if (req.url === '/about') {
//     res.end('This is the about page.\n');
//   }
//   else if (req.url === '/hello') {
//     res.end('Hello there! How are you?\n');
//   }
//   else {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('Page not found\n');
//   }
// });

// // Start the server on port 3000
// const PORT = 8000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
//   console.log('Try these endpoints:');
//   console.log(`- http://localhost:${PORT}/`);
//   console.log(`- http://localhost:${PORT}/about`);
//   console.log(`- http://localhost:${PORT}/hello`);
// });

// Event - file open, read, write, close
// event module is used to implement event-driven programming in Node.js.

// It allows you to create and handle custom events, making it easier to manage asynchronous operations and build scalable applications.

// button -> addEventListener('click', function() { console.log('Button clicked!'); });


const EventEmitter = require('events'); // Import the events module

const myEmitter = new EventEmitter(); // Create an instance of EventEmitter

myEmitter.on('greet', () => {
  console.log('Hello! Welcome to the event-driven world of Node.js!');
}); // Register an event listener for the 'greet' event



myEmitter.emit('greet'); // Emit the 'greet' event, triggering the listener




var myEventHandler = function() {
  console.log('I heared a Scream!');
}


myEmitter.on('scream', myEventHandler); // Register an event listener for the 'scream' event
myEmitter.emit('scream'); // Emit the 'scream' event, triggering the listener


myEmitter.once('once', () => {
  console.log('This will only be logged once!');
}); // Register an event listener for the 'once' event that will only be triggered once

myEmitter.emit('once'); // Emit the 'once' event, triggering the listener

myEmitter.removeListener('once', myEventHandler); // Remove the event listener for the 'once' event

myEmitter.removeAllListeners();







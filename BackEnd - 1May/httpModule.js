const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from HTTP module!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

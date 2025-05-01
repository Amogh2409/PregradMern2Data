// var http = require('http');
var fs = require('fs');


// http.createServer(function (req, res){
//     res.end('Hello World from Backend');
// }).listen(8080);


fs.writeFileSync('demo.txt', 'Hello, this is NodeJS');

const content = fs.readFileSync('demo.txt', 'utf-8');
console.log(content);

fs.writeFile('async.txt', 'Async write content', (err) => {
    if (err) throw err;
    console.log('File written asynchronously');
  });

fs.readFile('async.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Async read:', data);
  });
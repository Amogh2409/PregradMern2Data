const path = require('path');

const filePath = 'E:/PregradNewMern/Day-7/intro.js';


console.log('Base name:', path.basename(filePath)); // intro.js
console.log('Directory:', path.dirname(filePath)); // E:pregrad/
console.log('Extension:', path.extname(filePath));  // extension js


const newPath = path.join(__dirname, 'files', 'data.txt');
console.log('Joined Path:', newPath);
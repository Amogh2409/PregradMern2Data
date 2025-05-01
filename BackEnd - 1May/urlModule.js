const url = require('url');

const parsedUrl = url.parse('https://example.com/product?id=123&cat=books', true);

console.log('Host:', parsedUrl.host); // example.com
console.log('Pathname:', parsedUrl.pathname); // /product
console.log('Query Params:', parsedUrl.query); // { id: '123', cat: 'books' }

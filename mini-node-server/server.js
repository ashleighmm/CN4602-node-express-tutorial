// server.js
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end('The server is running');
});

server.listen(3000);
console.log('Server address: http://localhost:3000');

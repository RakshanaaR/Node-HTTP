const http = require('http');
const hostname = 'localhost';
const portno = 8080;
const server = http.createServer((req,res) =>
{
console.log(req.headers);
res.statusCode = 200;
res.setHeader('content-type','text/html');
res.end('<html><body><h1>Hello world</h1></body></html>');
}); 
server.listen(portno,hostname,() => 
{
    console.log(`Server running at http://${hostname}:${portno}`);
})


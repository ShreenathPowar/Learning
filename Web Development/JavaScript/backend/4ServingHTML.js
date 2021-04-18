const http = require('http');
const fs = require('fs');

let hostname = '127.0.0.1';
let port = 80; // when we use port 80, we don't have to explicitaly mention 80 in the url 

const fileContent = fs.readFileSync("../../HTML/6FormsAndInput.html");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
});

server.listen(port, hostname, () => {
    console.log(`Listening on http://${hostname}:${port}/`);
});
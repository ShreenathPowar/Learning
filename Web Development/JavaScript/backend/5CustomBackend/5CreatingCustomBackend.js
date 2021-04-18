const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('home.html');
const index = fs.readFileSync('index.html');
const services = fs.readFileSync('services.html');
const about = fs.readFileSync('about.html');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    url = req.url;
    if (url == '/') {
        res.end(home);
    }

    else if (url == '/about') {
        res.end(about);
    }

    else if (url == '/index') {
        res.end(index);
    }

    else if (url == '/services') {
        res.end(services);
    }

    else {
        res.statusCode = 404;
        res.end(`<h1 style="text-align='center'">Error 404! url not Found!</h1>`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Website ready at: http://${hostname}:${port}/`);
});
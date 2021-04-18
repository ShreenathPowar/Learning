// copied from node.js website and changed re.end on line 11.
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // for above to
    res.writeHead(200, {'Content-type':'text/html'});
    //   res.end('Hello World');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lists and Tables</title>
    </head>
    <body>
        <!--LISTS-->
        <ul type="square"> <!-- disc, square, circle-->
            <li>Unordered List 1st element</li>
            <ol type="1">
                <li>1st</li>
            </ol>
            <li>Unordered List 2nd element</li>
            <li>Unordered List 3rd element</li>
        </ul>
        <ol type="I"> <!--A, a, I, i-->
            <li>Ordered List 1st element</li>
            <li>Ordered List 2nd element</li>
            <li>Ordered List 3rd element</li>
        </ol>
    
        <!--TABLES-->
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Shree</td>
                    <td>Software Engineer</td>
                </tr>
                <tr>
                    <td>Shreenath</td>
                    <td>Software Developer</td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
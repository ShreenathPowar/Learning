const express = require('express');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8000;

// EXPRESS RELATED STUFF
const app = express();
app.use('/static', express.static('static'));
app.use(express.urlencoded()); // for getting post method data 

// PUG RELATED STUFF
app.set('view engine', 'pug');
// app.set('/template', path.join(__dirname, 'views')); no need to use if folder name is views.
//if you want to keep folder name as template then use above line.

// ENDPOINTS
app.get('/', (request, response) => {
    let heading = "Get Gym membership for 555 rps only!";
    let content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci,solutsapientevoluptas laudantium numquam quam. Obcaecati iste blanditiis et reprehenderit delenitiperferendis natus, aperiam sit aliquid saepe itaque ab dolor nihil, consequuntur maxime."
    const params = {'heading': heading, 'content': content};
    response.render('index', params);
});

app.post('/', (req, res) => {
    const form = req.body;
    const name = form.name;
    const email = form.email;
    const age = form.age;
    const gender = Object.keys(form).find(key => form[key] === 'on');
    let details = `The details are: {\n\tName: ${name},\n\tEmail:${email},\n\tAge:${age},\n\tGender:${gender}\n}\n\n`;
    fs.appendFileSync('users.txt', details);
    const params = {'message':'Form submitted successfully!'};
    res.status(200).render('index', params);
});

// LISTENER
app.listen(port, hostname, () => {
    console.log(`App started on http://${hostname}:${port}`);
});



// // importing express
// const express = require('express');
// const path = require('path'); // to just use path.join()

// const app = express();
// const hostname = '127.0.0.1';
// const port = 8000;

// // serving static files
// app.use('/static', express.static('static'));

// // set the template engine as pug
// app.set('view engine', 'pug');

// // set the template directory
// app.set('views', path.join(__dirname, 'views'));

// // pug demo endpoint
// app.get('/demo', function (req, res) {
//     res.status(203).render('demo', { title: 'Hey', message: 'Hello there!' });
// });

// // express ->
// app.get('/', (req, res) => {
//     res.status(200).send('this is my first express app. /');
// });

// app.get('/about', (req, res) => {
//     res.status(201).send('This is a get request  /about');
// });

// app.post('/about', (reqq, res) => {
//     res.status(202).send('This is a post request /about');
// });

// app.get('/this', (reqq, res) => {
//     res.status(404).send('404! Not Found!');
// });

// app.listen(port, hostname, () => {
//     console.log(`Appliation started at http://${hostname}:${port}`);
// })


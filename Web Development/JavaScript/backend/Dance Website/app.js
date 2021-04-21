// modules import
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 80;
const hostname = '127.0.0.1';

// EXPRESS
const app = express();
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG
app.set('view engine', 'pug');
app.set('/views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('home');
});

app.get('/contact', (req, res) => {
    res.status(201).render('contact');
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    const form = req.body;
    const name = form.name;
    const email = form.email;
    const age = form.age;
    // const gender = Object.keys(form).find(key => form[key] === 'on');
    const gender = form.gender;
    const message = form.message;
    const params = `Contact:${name} {\n\tname: ${name},\n\temail: ${email},\n\tage: ${age},\n\tgender: ${gender}\n\tmessage: ${message}\n}\n\n`;
    fs.appendFileSync('danceAcademyContactors.txt', params);
    res.status(202).render('contact');
});

// START THE SERVER
app.listen(port, hostname, () => {
    console.log(`Website started at http://${hostname}:${port}`);
});
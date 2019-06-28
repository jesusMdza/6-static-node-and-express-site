const express = require('express');
const projectData = require('./data.json');
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    
});

app.get('/project', (req, res) => {
    
});

app.listen(3000);
/*************************************

FSJS TechDegree Project - Static Node and Express Site


- This project is attempting to receive an "Exceeds Expectations" grade.

*************************************/

const express = require('express');
const app = express();

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectsRoute = require('./routes/project');

app.use('/static', express.static('public'));
app.use(mainRoutes);
app.use('/project', projectsRoute);

app.get('*', (req, res, next) => {
    const err = new Error(`Oh no! The requested route: "${req.url}" does not exist`);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(err.status);
    res.render('error', {error: err});
});

app.listen(3000, console.log('listening on port 3000!'));
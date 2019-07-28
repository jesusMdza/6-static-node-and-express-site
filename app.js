/*************************************

FSJS TechDegree Project - Static Node and Express Site


- This project is attempting to receive an "Exceeds Expectations" grade.

*************************************/


// load express module
const express = require('express');
const app = express();


// set view engine to pug
app.set('view engine', 'pug');


// load local modules
const mainRoutes = require('./routes');
const projectsRoute = require('./routes/project');


// serve static files (images, css) at route "static" from "public" folder
// use "mainRoutes" middleware
// use "projectsRoute" middleware on route "project"
app.use('/static', express.static('public'));
app.use(mainRoutes);
app.use('/project', projectsRoute);


// receive all get requests that do no match any get handler in project
// create an err object and set status to 404
app.get('*', (req, res, next) => {
    const err = new Error(`Oh no! The requested route: "${req.url}" does not exist`);
    err.status = 404;
    next(err);
});


// render "error.pug" and pass "err" object in locals "error" property
app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(err.status);
    res.render('error', {error: err});
});


// creates a local server and listens for user requests at port 4000
app.listen(process.env.PORT || 4000);
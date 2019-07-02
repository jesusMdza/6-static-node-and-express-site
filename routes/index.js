// mainRoutes module


const express = require('express');
const router = express.Router(); // create express "mini app"
const jsonData = require('../data.json'); //
const projects = jsonData.projects;


// get request handler for home route and renders "index.pug" while passing "templateData" variable
router.get('/', (req, res) => {
    const templateData = {projects};

    res.render('index', templateData);
});


// get request handler for about route and renders "about.pug"
router.get('/about', (req, res) => {
    res.render('about');
});


// gives remote files acess to this file
module.exports = router;
const express = require('express');
const router = express.Router();
const jsonData = require('../data.json');
const projects = jsonData.projects;

router.get('/', (req, res) => {
    const templateData = {projects};

    res.render('index', templateData);
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
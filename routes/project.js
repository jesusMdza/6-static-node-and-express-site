const express = require('express');
const router = express.Router();
const jsonData = require('../data.json');
const projects = jsonData.projects;

router.get('/', (req, res) => {
    res.redirect('/project/0');
});

router.get('/:id', (req, res) => {
    if (req.params.id >= projects.length || isNaN(req.params.id)) {
        res.redirect('/project/0');
    }

    const id = req.params.id;
    const title = projects[id].project_name;
    const description = projects[id].description;
    const technologies = projects[id].technologies;
    const liveLink = projects[id].live_link;
    const githubLink = projects[id].github_link;
    const imageUrls = projects[id].image_urls;
    
    const templateData = {projects, title, description, technologies, liveLink, githubLink, imageUrls};

    res.render('project', templateData);
});

module.exports = router;
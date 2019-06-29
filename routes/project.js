const express = require('express');
const router = express.Router();
const jsonData = require('../data.json');
const projects = jsonData.projects;

router.get('/', (req, res) => {
    const id = req.params.id;
    const title = projects.project_name;
    const description = projects.description;
    const technologies = projects.technologies;
    const liveLink = projects.live_link;
    const githubLink = projects.github_link;
    const image_urls = projects.image_urls;
    
    const templateData = { title , description };
    
    res.render('project', templateData);
});

module.exports = router;
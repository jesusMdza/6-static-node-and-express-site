// projectsRoute module


const express = require('express');
const router = express.Router(); // create express "mini app"
const jsonData = require('../data.json'); // load JSON file
const projects = jsonData.projects; // access projects array in JSON file


// get handler for /project without an id and renders to first project
router.get('/', (req, res) => {
    res.redirect('/project/0');
});


// get handler for /project/:id
// render "project.pug" and pass in the following variables
router.get('/:id', (req, res) => {

    // load first project if "id" number is greater than or equal the "projects" array length or if "id" is not a number
    if (req.params.id >= projects.length || isNaN(req.params.id)) {
        res.redirect('/project/0');
    }

    // local variables which access properties from "projects" array
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


// give remote files access to this file
module.exports = router;
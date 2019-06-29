const express = require('express');
const router = express.Router();
const jsonData = require('../data.json');
const projects = jsonData.projects;

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
});

module.exports = router;
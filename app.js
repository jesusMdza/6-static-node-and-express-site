const express = require('express');
const app = express();

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectsRoute = require('./routes/project');

app.use('/static', express.static('public'));
app.use(mainRoutes);
app.use('/project', projectsRoute);

app.listen(3000);
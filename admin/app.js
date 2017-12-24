const express = require('express');
const routes = require('./route');
const {applyRoute,startServer} = require('./utils/app');
const serverConfig = require('./serverConfig');

const app=express();

app.get('/',function (req, res) {
    res.send('hello Word');
});

app.use(express.static('static'));

applyRoute(routes,app);

startServer(serverConfig,app);

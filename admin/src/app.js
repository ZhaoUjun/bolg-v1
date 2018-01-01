import {serverConfig} from './constant'
import log4js from 'log4js';
import express from 'express';
import routes from './route';
import {logger} from './utils/logger'
import bodyParser from 'body-parser'
import multer from 'multer'

import {applyRoute,startServer,applyMiddleWares} from './utils/app';
import {logError,test1,checkSignature,allowCORS} from './utils/appMiddlewares';


const app=express();

app.get('/',function (req, res) {
    res.send('hello Word');
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(new multer()); // for parsing multipart/form-data
app.use(express.static('static'));
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));


applyMiddleWares(app,checkSignature,allowCORS,test1,logError,);

applyRoute(routes,app);

startServer(serverConfig,app);

import {serverConfig} from './constant'
import log4js from 'log4js';
import express from 'express';
import routes from './route';
import {logger} from './utils/logger'
import bodyParser from 'body-parser'
import session from 'express-session'
import { SESSION_CONFIG } from './constant'
import {applyRoute,startServer,applyMiddleWares} from './utils/app';
import {logError,test1,allowCORS} from './utils/appMiddlewares';

const app=express();


app.use(session(SESSION_CONFIG));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(new multer()); // for parsing multipart/form-data
app.use(express.static('static'));
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
app.use(function (req,res,next) {
    // req.session.id=13213;
    next()
});

applyMiddleWares(app,allowCORS,test1,logError,);

applyRoute(routes,app);

startServer(serverConfig,app);

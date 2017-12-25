import {serverConfig} from './constant'
import log4js from 'log4js';
import express from 'express';
import routes from './route';
import {logger} from './utils/logger'
import {applyRoute,startServer,applyMiddleWares} from './utils/app';
import {logError,test1,checkSignature,allowCORS} from './utils/appMiddlewares';


const app=express();

app.get('/',function (req, res) {
    res.send('hello Word');
});

app.use(express.static('static'));
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));


applyMiddleWares(app,checkSignature,allowCORS,test1,logError,);

applyRoute(routes,app);

startServer(serverConfig,app);

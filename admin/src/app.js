import serverConfig from './serverConfig'
import express from 'express';
import routes from './route';
import {applyRoute,startServer} from './utils/app';

const app=express();

app.get('/',function (req, res) {
    res.send('hello Word');
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500); // 状态码默认为500（服务器内部错误）
    res.render('error', {
        message: err.message,
        error: err    // 生产环境中应设为 `error: {}`，禁止输出错误
    });
});

app.use(express.static('static'));

applyRoute(routes,app);

startServer(serverConfig,app);

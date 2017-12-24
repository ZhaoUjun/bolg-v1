const express = require('express');
const router = express.Router();
const HomeController =require('../controler/Home');

const control=new HomeController();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//获取文章列表
router.get('/', control.getArticles.bind(control));


module.exports = router;
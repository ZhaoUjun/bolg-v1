const express = require('express');
const router = express.Router();
const {query$} =require('../db/connect');

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//获取文章详情
router.get('/', function(req, res) {
    res.send('Birds home page');
});

// 新增文章
router.post('/', function(req, res) {
    res.send('About birds');
});

// 更新文章
router.put('/', function(req, res) {
    res.send('About birds');
});

module.exports = router;
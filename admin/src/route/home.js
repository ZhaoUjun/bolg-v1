import express from 'express';
import HomeController from '../controler/Home';

const router = express.Router();

const control=new HomeController();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//获取文章列表
router.get('/', control.getArticles.bind(control));

export  default router;
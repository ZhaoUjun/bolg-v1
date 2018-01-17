import express from 'express';
import HomeController from '../controler/Home';

const router = express.Router();

const {
    getArticles,
    addViewTimes
}=new HomeController();


// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    next();
});

//获取文章列表
router.get('/', getArticles);

//增加文章阅读数
router.get('/add-view-times', addViewTimes);

export  default router;
import express from 'express';
import HomeController from '../controler/Home';

const router = express.Router();

const {getArticles}=new HomeController();


// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    next();
});

//获取文章列表
router.get('/', getArticles);

export  default router;
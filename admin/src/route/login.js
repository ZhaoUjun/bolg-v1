import express from 'express';
import LoginController from '../controler/Login';

const router = express.Router();

const {
    handleLogin,
    getCaptcha
}=new LoginController();

// 该路由使用的中间件
router.use(function(req, res, next) {

    next();
});

//获取文章列表
router.post('/', handleLogin);

router.get('/captcha.png',getCaptcha);

export  default router;
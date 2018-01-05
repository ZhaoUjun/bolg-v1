import express from 'express';
import {checkSignature} from '../utils/appMiddlewares'
import AdminControl from '../controler/Admin';


const {addArticle,getArticles,getCaptcha} = new AdminControl();

const router = express.Router();

// 该路由使用的中间件
router.use(checkSignature);


//获取文章列表
router.get('/article', getArticles);

// 新增文章
router.post('/article', addArticle);

// 更新文章
router.put('/article', function(req, res) {
    res.send('About birds');
});


export default router;
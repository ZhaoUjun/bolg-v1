import BaseController from './Base';
import HomeController from './Home'
import {autobind} from 'core-decorators'


const home=new HomeController();
export default class AdminController extends BaseController {

    @autobind
    getTagName(tagId){
        return this.query(`select id,name from tag where id="${tagId}" `)
    }

    @autobind
    async getArticles(req,res,next){
        return home.getArticles(req,res,next)
    }

    @autobind
    async addArticle(req,res,next){
        try {
            const {body:{tagIds}}=req;
            const data={...req.body,tagIds:tagIds.toString()};
            const result=await this.articleService.addArticle(data);
            this.handleSuccess(res)(result)
        }
        catch (err) {
            console.log(err)
            this.handleError.apply(this,[...arguments,err])
        }
    }


}
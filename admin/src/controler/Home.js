import BaseController from './Base';
import {autobind} from 'core-decorators'

export default class HomeController extends BaseController {

    @autobind
    getTagName(tagId){
        return this.query(`select id,name from tag where id="${tagId}" `)
    }

    @autobind
    async getArticles(req,res,next){
        const articles=await this.query('select * from article order by id limit 0,2;').then(this.splitStrToAry('tagIds'));
        const result=articles.map(async article=>{
            let tags=[];
            if (article.tagIds){
                 for await (const result of article.tagIds.map(id=>this.getTagName(id))){
                     tags.push(result[0]?result[0]:[])
                 }
            }
            return {...article,tags}
        });
        this.handleSuccess(res)(await Promise.all(result))
    }
}

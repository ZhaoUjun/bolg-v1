import BaseController from './Base';
import {autobind} from 'core-decorators'
import {pickBy,pipe,merge} from 'ramda'
import { subString } from '../utils/common'

function excludeProps(propName) {
    return pickBy((v,k)=>k!==propName)
}

function fixContent(article) {
   return merge({preview:subString(150,article.content)},article)
}

function log(data) {
    console.log(data)
    return data
}


export default class HomeController extends BaseController {

    @autobind
    getTagName(tagId){
        return this.query(`select id,name from tag where id="${tagId}" `)
    }

    @autobind
    async getArticles(req,res,next){
        const articles=await this.articleService.getArticles()
            .then(this.splitStrToAry('tagIds'));
        const result=articles.map(async article=>{
            let tags=[];
            if (article.tagIds){
                 for await (const result of article.tagIds.map(id=>this.getTagName(id))){
                     tags.push(result[0]?result[0]:[])
                 }
            }
            return pipe(
                excludeProps('tagIds'),
                fixContent,
                log,
            )({...article,tags})
        });
        this.handleSuccess(res)(await Promise.all(result))
    }
}
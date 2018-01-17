import BaseController from './Base';
import {autobind} from 'core-decorators'
import {pickBy,pipe,merge,keys,filter,curry,compose} from 'ramda'
import { subString } from '../utils/common'
import joi from 'joi'

function excludeProps(propName) {
    return pickBy((v,k)=>k!==propName)
}

function fixContent(article) {
   return merge({preview:subString(150,article.content)},article)
}

function takeProps(props,obj) {
    let newObj={};
    let i=0;
    while (i<props.length){
        newObj[props[i]]=obj[props[i]];
        i++;
    }
    return newObj
}

function dropProps(propName,arr) {
    return arr.map(item=>{
        return compose(
            curry(takeProps),
            filter(key=>key!==propName),
            keys
        )(item)(item)
    })
}


function dropDetail(articles) {
    return dropProps('content',articles)
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
        let articles;
        if (req.query.tagId){
            articles=await this.getArticlesByTagId(req.query.tagId,req.query.pageNo)
                .then(this.splitStrToAry('tagIds'))
        }else {
            articles=await this.articleService.getArticles(req.query.pageNo)
                .then(this.splitStrToAry('tagIds'));
        }
        const result=articles.map(async article=>{
            let tags=[];
            if (article.tagIds){
                 for await (const result of article.tagIds.map(id=>this.getTagName(id))){
                     tags.push(result[0]?result[0]:[])
                 }
            }
            return compose(
                excludeProps('tagIds'),
                fixContent,
            )({...article,tags})
        });
        this.handleSuccess(res)(await Promise.all(result))
    }

    async getArticlesByTagId(id){
        return this.articleService.getArticlesByTagId(id)
    }


    @autobind
    async addViewTimes(req,res){
        try {
            const paramSchema=joi.object().keys({
                articleId:joi.string().required()
            });
            const {error, value} = joi.validate(req.query, paramSchema);
            if (error) throw '参数错误';
            await this.articleService.addViewTime(value.articleId);
            this.handleSuccess(res)(true)
        }
        catch (err){
            this.handleReqError(res,{
                msg:err,
                code:20,
                data:null
            })
        }
    }

}

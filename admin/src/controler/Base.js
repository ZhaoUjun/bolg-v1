import {query$,connection} from '../db/connect';
import {withCurry} from '../utils/decorator'
import ArticleService from '../service/ArticleService'

export default class BaseController {

    articleService=new ArticleService();


    constructor(){

    }

    query$(sql){
        return query$(sql)
    }

    query(sql){
        return query$(sql).toPromise()
    }

    @withCurry
    splitStrToAry(propName,data){
        console.log(data)
        return data.map(item=>{
            return {...item ,...{[propName]:item[propName]?item[propName].split(','):null}}
        })
    }

    @withCurry
    handleSuccess(res,data){
        res.send({
            data,
            code:0,
            msg:'成功'
        })
    }

    @withCurry
    handleError(req,res,next,err){
        res.status(500);
        console.log(err);
        next({
            msg:'服务器斜壁了',
            code:10
        })
    }

}


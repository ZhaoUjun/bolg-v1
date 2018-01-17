import {query$,connection} from '../db/connect';
import {withCurry} from '../utils/decorator'
import ArticleService from '../service/ArticleService'
import {values,isEmpty} from 'ramda'

function objValNotEmpty(obj) {
    return values(obj).every(v=>isEmpty(v))
}
export default class BaseController {

    articleService=new ArticleService();


    constructor(){

    }

    /**
     * 检查请求Body的值是否空
     * @param body
     */
    bodyIsNotEmpty(body){
        return values(body).every(v=>!isEmpty(v))
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
    handleSuccess(res,data,code=0,msg='成功'){
        res.send({
            data,
            code,
            msg
        })
    }

    handleReqError(res,payload={}){
        res.send(payload)
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


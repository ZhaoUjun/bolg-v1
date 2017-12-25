import {query$} from '../db/connect';
import {withCurry} from '../utils/decorator'

export default class BaseController {
    constructor(){

    }

    query$(sql){
        return query$(sql)
    }

    @withCurry
    splitStrToAry(propName,data){
        return data.map(item=>{
            return {...item ,...{[propName]:item[propName].split(',')}}
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


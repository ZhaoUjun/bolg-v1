const {query$} =require('../db/connect');

class BaseController {
    constructor(){

    }

    query$(sql){
        return query$(sql)
    }

    splitStrToAry(propName,data){
        return data.map(item=>Object({...item,...{[propName]:item[propName].split(',')}}))
    }

    handleSuccess(res,data){
        res.send({
            data,
            code:0,
            msg:'成功'
        })
    }

    handleError(req,res,next,err){
        res.status(500);
        console.log(err);
        next('服务器歇逼了')
    }

}

module.exports=BaseController;
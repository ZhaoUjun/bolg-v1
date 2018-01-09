import {signalWhiteList} from '../constant'

function isInWhiteList(white,req) {
    return signalWhiteList.filter(item=>item===req.url).length>0
}

export function logError(err, req, res, next) {
    res.status(err.status || 500); // 状态码默认为500（服务器内部错误）
    res.send({
        data:null,
        msg:err.msg||err||'服务器斜壁了',
        code:err.code||10
    });
}

export function test1(req, res, next) {
    next()
}

export function checkSignature(req, res, next) {
    if (isInWhiteList(signalWhiteList,req)){
        return next()
    }
    //check here
    next()

}

export function allowCORS(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization,Sign,Time,Content-Type,APPId,AppKey");
    next()
}

export function sessionCheck(req,res,next) {

}
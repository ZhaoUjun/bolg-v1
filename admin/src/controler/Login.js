import BaseController from './Base';
import {autobind} from 'core-decorators'
import captcha from 'captchapng'


import {values,isEmpty} from 'ramda'

function objValNotEmpty(obj) {
    return values(obj).every(v=>isEmpty(v))
}

export default class Login extends BaseController{

    @autobind
    handleLogin(req,res){
        const {body,session}=req;
        const {account,password}=body;
        if (!this.bodyIsNotEmpty(body)){
            return this.handleSuccess(res,false,10,'账号、密码或者验证码不能为空!')
        }
        if (!session.code||body.captcha!=session.code){
           return this.handleSuccess(res,false,10,'验证码错误')
        }
        this.query(`select * from author where account="${account}" and password="${password}"`)
            .then(result=>{
                if (result&&result.length>0){
                    session.destroy();
                    this.handleSuccess(res,true)
                }
                else {
                    return this.handleSuccess(res,false,10,'账号或者密码错误')
                }
            })
    }

    @autobind
    getCaptcha(req,res){
        const code=parseInt(Math.random()*9000+1000);
        req.session.code=code;
        req.session.save(function (err) {
            const  p = new captcha(80,30,code); // width,height,numeric captcha 
            p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
            p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 

            const  img = p.getBase64();
            const  imgbase64 = new Buffer(img,'base64');
            res.header('Content-Type', 'image/png');
            res.send(imgbase64);
        })
    }
}
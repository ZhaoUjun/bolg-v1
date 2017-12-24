const BaseController = require('./Base');
const {curry} = require('ramda');

class HomeController extends BaseController {

    getArticles(req,res,next){
        this.query$('select * from article order by id limit 0,2;')
            .map(curry(this.splitStrToAry)('tagIds'))
            .subscribe(
                curry(this.handleSuccess)(res)
                ,()=>this.handleError(req,res,next))
    }

}


module.exports=HomeController;
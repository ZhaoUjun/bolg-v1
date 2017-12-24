const BaseController = require('./Base');

class HomeController extends BaseController {

    getArticles(req,res,next){
        this.query$('select * from article order by id limit 0,2;')
            .subscribe(data=>{
                res.send(data)
            })
    }

}


module.exports=HomeController;
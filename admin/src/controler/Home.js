import BaseController from './Base';
import {autobind} from 'core-decorators'

export default class HomeController extends BaseController {

    @autobind
    getArticles(req,res,next){
        this.query$('select * from article order by id limit 0,2;')
            .map(this.splitStrToAry('tagIds'))
            .subscribe(
                this.handleSuccess(res),
                this.handleError(req,res,next)
            )
    }
}

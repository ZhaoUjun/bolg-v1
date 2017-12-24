import BaseController from './Base';
import {curry} from 'ramda';

export default class HomeController extends BaseController {

    getArticles(req,res,next){
        this.query$('select * from article order by id limit 0,2;')
            .map(curry(this.splitStrToAry)('tagIds'))
            .subscribe(
                this.handleSuccess(res),
                this.handleError(req,res,next)
            )
    }
}

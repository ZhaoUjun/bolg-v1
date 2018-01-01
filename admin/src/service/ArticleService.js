import BaseService from './BaseService';
import {pipe} from 'ramda'

export default class ArticleService extends BaseService {

    /**
     * 获取文章列表
     * @param condition
     * @param pageNo
     * @param pageSize
     * @returns {*}
     */
    getArticles(condition={},pageNo=1,pageSize=this.PAGE_SIZE) {
        const {from ,to} =this.getRange(pageNo,pageSize);
        const sql=`select * from article order by id limit ${from},${to};`;
        return pipe(this.joinConditions(condition),this.query)(sql)
    }

    /**
     * 新增文章
     * @param data
     * @returns {*}
     */
    addArticle(data){
        return this.insertData('article',data)
    }
}
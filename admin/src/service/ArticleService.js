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
    getArticles(pageNo=1,pageSize=this.PAGE_SIZE) {
        const {from ,to} =this.getRange(pageNo,pageSize);
        const sql=`select * from article order by id limit ${from},${to};`;
        return this.query(sql)
    }

    getArticlesByTagId(tagId,pageNo=1,pageSize=this.PAGE_SIZE){
        const {from ,to} =this.getRange(pageNo,pageSize);
        const sql=`select * from article where tagIds regexp "${this.generateQueryIdSQL(tagId)}" order by id limit ${from},${to};`;
        return this.query(sql)
    }

    /**
     * 新增文章
     * @param data
     * @returns {*}
     */
    addArticle(data){
        return this.insertData('article',data)
    }

    /**
     * 新增文章
     * @param data
     * @returns {*}
     */
    addViewTime(id){
        const sql=new this.SQL({
            table:'article',
            data:{readCnt:'readCnt +1 '},
            condition:`id =${id}`
        })
        return this.query(sql.updateSql)
    }




}
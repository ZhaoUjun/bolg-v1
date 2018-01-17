import {query$,query} from '../db/connect';
import {withCurry} from '../utils/decorator'
import {isEmpty,empty,values,keys} from 'ramda'
import { QUERY_CONFIG } from '../constant'
import { SQL } from '../db/SQL'
import { format } from 'mysql'

function splitObjToQr(obj) {
    return Object.keys(obj).reduce((acc,key)=>`${acc} ${key}='${obj[key]}'`,' where ')
}

export default class BaseService {

    PAGE_SIZE=QUERY_CONFIG.PAGE_SIZE;

    SQL=SQL;

    query$(sql){
        return query$(sql)
    }

    query(sql){
        return query(sql)
    }

    getRange(pageNum,pageSize){
        return{
            from:pageSize?pageSize*(pageNum-1):this.PAGE_SIZE*(pageNum-1),
            to:pageSize?pageSize*pageNum:this.PAGE_SIZE*pageNum
        }
    }

    @withCurry
    joinConditions(condition,sql){
        if (isEmpty(condition)){
            return sql
        }
        const res=/where/.exec(sql);
        return res?sql.replace('where',splitObjToQr(condition)):sql+splitObjToQr(condition)
    }

    insertData(table,data){
        if (isEmpty(data)){
            return Promise.reject('')
        }
        const sql=new SQL({table,data});
        return this.query(sql.insertSql)
    }


    @withCurry
    splitStrToAry(propName,data){
        return data.map(item=>{
            return {...item ,...{[propName]:item[propName].split(',')}}
        })
    }

    generateQueryIdSQL(id){
        return `^id$|^$id,|,id$|,id,`.replace(/id/g,id)
    }
}




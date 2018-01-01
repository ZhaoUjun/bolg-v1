import mysql,{format} from 'mysql';
import config from './MysqlConfig';
import Rx from 'rxjs';


export const connection = mysql.createConnection(config.mysql);

connection.connect();

function _query(sql, values, cb) {
    return connection.query(sql, values, cb)
}

export function query$(sql) {
    return Rx.Observable.bindCallback(_query)(sql)
        .map(res=>{
            if (res[0]){
                throw res[0]
            }
            return res[1]
        })
        .catch(err=>{
            throw err
        })
}

export function query(sql) {
    return query$(sql).toPromise()
}



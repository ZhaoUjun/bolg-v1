const mysql = require('mysql');
const config=require('./MysqlConfig');
const Rx = require('rxjs');


const connection = mysql.createConnection(config.mysql);

connection.connect();

function _query(sql, values, cb) {
    return connection.query(sql, values, cb)
}

function query$(sql) {
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

module.exports={
    query$
};
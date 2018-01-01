import  { }  from '../constant'
import {keys,values} from 'ramda'
import {format} from 'mysql'


export class SQL{
    constructor(config){
        const { table,data} =config;
        this.table=table;
        this.keys=keys(data);
        this.values=values(data);
        this.insertSql=this.createInsertSql()

    }

    createInsertSql(){
        const values=Array.from(this.keys,i=>'?');
        return format(`INSERT INTO ${this.table} (${this.keys.toString()}) VALUES(${values.toString()})`,this.values)
    }

    createUpdateSql(){

    }

    queryAll(withCondition){
        if (!withCondition){
            return `SELECT * FROM ${this.table}`
        }
        return `SELECT * FROM ${this.table} where `

    }


}
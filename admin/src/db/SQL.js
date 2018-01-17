import {keys,values} from 'ramda'
import {format} from 'mysql'

function join(obj) {
    return keys(obj).map(key=>`${key}=${obj[key]}`).toString()
}

export class SQL{
    constructor(config){
        const { table,data,condition} =config;
        this.condition=condition;
        this.data=data;
        this.table=table;
        this.keys=keys(data);
        this.values=values(data);
        this.insertSql=this.createInsertSql();
        this.updateSql=this.createUpdateSql();
    }

    createInsertSql(){
        const values=Array.from(this.keys,i=>'?');
        return format(`INSERT INTO ${this.table} (${this.keys.toString()}) VALUES(${values.toString()})`,this.values)
    }

    createUpdateSql(){
        return `UPDATE ${this.table} SET  ${join(this.data)} where ${this.condition}`
    }

    queryAll(withCondition){
        if (!withCondition){
            return `SELECT * FROM ${this.table}`
        }
        return `SELECT * FROM ${this.table} where `

    }


}
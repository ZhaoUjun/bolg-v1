(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'ramda', 'mysql'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('ramda'), require('mysql'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ramda, global.mysql);
        global.SQL = mod.exports;
    }
})(this, function (exports, _ramda, _mysql) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SQL = undefined;


    function join(obj) {
        return (0, _ramda.keys)(obj).map(key => `${key}=${obj[key]}`).toString();
    }

    let SQL = exports.SQL = class SQL {
        constructor(config) {
            const { table, data, condition } = config;
            this.condition = condition;
            this.data = data;
            this.table = table;
            this.keys = (0, _ramda.keys)(data);
            this.values = (0, _ramda.values)(data);
            this.insertSql = this.createInsertSql();
            this.updateSql = this.createUpdateSql();
        }

        createInsertSql() {
            const values = Array.from(this.keys, i => '?');
            return (0, _mysql.format)(`INSERT INTO ${this.table} (${this.keys.toString()}) VALUES(${values.toString()})`, this.values);
        }

        createUpdateSql() {
            return `UPDATE ${this.table} SET  ${join(this.data)} where ${this.condition}`;
        }

        queryAll(withCondition) {
            if (!withCondition) {
                return `SELECT * FROM ${this.table}`;
            }
            return `SELECT * FROM ${this.table} where `;
        }

    };
});
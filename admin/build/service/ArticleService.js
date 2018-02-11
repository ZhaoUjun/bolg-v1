(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './BaseService', 'ramda'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./BaseService'), require('ramda'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.BaseService, global.ramda);
        global.ArticleService = mod.exports;
    }
})(this, function (exports, _BaseService, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _BaseService2 = _interopRequireDefault(_BaseService);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let ArticleService = class ArticleService extends _BaseService2.default {

        /**
         * 获取文章列表
         * @param condition
         * @param pageNo
         * @param pageSize
         * @returns {*}
         */
        getArticles(pageNo = 1, pageSize = this.PAGE_SIZE) {
            const { from, to } = this.getRange(pageNo, pageSize);
            const sql = `select * from article order by id limit ${from},${to};`;
            return this.query(sql);
        }

        getArticlesByTagId(tagId, pageNo = 1, pageSize = this.PAGE_SIZE) {
            const { from, to } = this.getRange(pageNo, pageSize);
            const sql = `select * from article where tagIds regexp "${this.generateQueryIdSQL(tagId)}" order by id limit ${from},${to};`;
            return this.query(sql);
        }

        /**
         * 新增文章
         * @param data
         * @returns {*}
         */
        addArticle(data) {
            return this.insertData('article', data);
        }

        /**
         * 新增文章
         * @param data
         * @returns {*}
         */
        addViewTime(id) {
            const sql = new this.SQL({
                table: 'article',
                data: { readCnt: 'readCnt +1 ' },
                condition: `id =${id}`
            });
            return this.query(sql.updateSql);
        }

    };
    exports.default = ArticleService;
});
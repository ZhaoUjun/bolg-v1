import log4js from 'log4js';
import path from 'path'
import moment from 'moment'



log4js.configure(
    {
        appenders: {
            file: {
                type : 'file',
                filename: path.resolve(__dirname,`../../logs/${moment().format('YYYY-MM-DD')}.log`),//文件目录，当目录文件或文件夹不存在时，会自动创建
                maxLogSize : 10000,//文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
                backups : 3,//当文件内容超过文件存储空间时，备份文件的数量
                encoding : 'utf-8',//default "utf-8"，文件的编码
                category : 'log_file',
                numBackups: 5, // keep five backup files
                compress: true, // compress the backups
            },
            // dateFile: {
            //     type: 'dateFile',
            //     filename: 'more-important-things.log',
            //     pattern: 'yyyy-MM-dd-hh',
            //     compress: true
            // },
            out: {type: 'stdout'}
        },
        categories: {
            default: { appenders: ['file', 'out'], level: 'trace' }
        }
    }
);

export const logger=log4js.getLogger('log_file');
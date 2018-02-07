// const argv = require('optimist').argv;
import optimist from 'optimist'
const {u,p}=optimist.argv;
export default {
    mysql:{
        host:'localhost',
        user:u.toString(),
        password:p.toString(),
        database:'my-blog',
        port:'3306',
        dateStrings:true
    }
};
// const argv = require('optimist').argv;
import optimist from 'optimist'
const {u,p}=optimist.argv;
export default {
    mysql:{
        host:'119.23.255.113',
        user:u.toString(),
        password:p.toString(),
        database:'blog',
        port:'3306',
        dateStrings:true
    }
};

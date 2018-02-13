import mysql,{format} from 'mysql';
import config from './MysqlConfig';
import Rx from 'rxjs';


 let connection ;


function handleDisconnect() {
    connection = mysql.createConnection(config.mysql); // Recreate the connection, since
                                                    // the old one cannot be reused.

    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

function _query(sql, values, cb) {
    return connection.query(sql, values, cb)
}

export function query$(sql) {
    return Rx.Observable.bindCallback(_query)(sql)
        .map(res=>{
            console.log(res)
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



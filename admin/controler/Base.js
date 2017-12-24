const {query$} =require('../db/connect');

class BaseController {
    constructor(){

    }

    query$(sql){
        return query$(sql)
    }
}

module.exports=BaseController;
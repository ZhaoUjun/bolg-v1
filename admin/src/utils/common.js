import {isEmpty} from 'ramda'

export function subString(len=0,str) {
    if (isEmpty(str)){
        return ''
    }
    const {length}=str;
    if (length<len){
        return str
    }
    return str.substr(0,len);

}
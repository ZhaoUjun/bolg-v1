import {curry} from 'ramda'


/**
 * 类方法curry化，详见ramda.js
 * @param target
 * @param name
 * @param descriptor
 * @returns {{value: *}}
 */
export function withCurry(target,name,descriptor) {
    let value;
    if (typeof descriptor.value ==='function'){
        value=curry(descriptor.value)
    }
    return {...descriptor,value}
}

import {curry} from 'ramda'


export function withCurry(target,name,descriptor) {
    let value;

    if (typeof descriptor.value ==='function'){
        value=curry(descriptor.value)
    }
    return {...descriptor,value}
}
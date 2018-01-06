/**
 * 拼接查询参数
 * @param url
 * @param queryParas
 * @return {string}
 */
export function joinQueryString(url:string,queryParas:object):string{
  let finalUrl;
  if (!url||typeof url!="string"){
    throw 'url must be sting and not empty!'
  }
  else if (typeof queryParas!='object'){
    throw 'queryParas must be object!'
  }
  else if (!queryParas){
    return url
  }
  else {
    for (let key of Object.keys(queryParas)){
      if (queryParas[key]){
        url+=key+'='+queryParas[key]+'&'
      }
    }
    if (url.endsWith('&')){
      let final=url.split('');
      final.pop();
      finalUrl=final.join('');
    }
    return finalUrl
  }
}

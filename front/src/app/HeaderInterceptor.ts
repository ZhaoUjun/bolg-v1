import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {APP_CONFIG} from './constant'

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let finalReq=req.clone({
      url:APP_CONFIG.BASE_API_URL+req.url,
      withCredentials:true
    });

    if (req.url.startsWith('/admin')){
      finalReq=generateHeaders(finalReq);
    }

    return next.handle(finalReq);
  }

}

function generateHeaders(req:HttpRequest<any>):HttpRequest<any>{
  const headers=req.headers
    .set('AppId', 'appId')
    .set('AppKey', 'appKey')
    .set('Sign','sign')
    .set('Time',String(Date.now()))
  ;
  return req.clone({headers});
}

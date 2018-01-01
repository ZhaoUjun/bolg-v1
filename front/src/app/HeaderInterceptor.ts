import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

const [BASE_API_URL]=[
  'http://127.0.0.1:3000'
];

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let finalReq=req.clone({url:BASE_API_URL+req.url});

    if (req.url.startsWith('/admin')){
      const headers=req.headers
        .set('Authorization', 'Authorization')
        .set('Sign','sign')
        .set('Time',String(Date.now()))
      ;
      finalReq=finalReq.clone({headers});
    }

    // Pass on the cloned request instead of the original request.
    return next.handle(finalReq);
  }
}

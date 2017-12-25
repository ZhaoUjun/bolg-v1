import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import set = Reflect.set;

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    // Clone the request to add the new header.
    const headers=req.headers
      .set('Authorization', 'Authorization')
      .set('Sign','sign')
      .set('Time',String(Date.now()))
    ;
    const authReq = req.clone({headers});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}

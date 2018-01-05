import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../constant'
import {HttpClient} from '@angular/common/http';
import {LoginForm} from './types'
import {Observable} from 'rxjs'
import {ResponseVo} from '../types'

interface ResponseItem{
  code:number;
  data:any;
  msg:string;
}

@Injectable()
export class LoginService {


  constructor(
    private http:HttpClient
  ) { }

  getCaptchaUrl():string{
    return APP_CONFIG.BASE_API_URL+`/login/captcha.png?r=${Math.random()}`
  }

  handelSubmitLogin(loginForm:LoginForm):Observable<Object>{
     return this.http
       .post<ResponseItem>('/login',loginForm)
  }

}

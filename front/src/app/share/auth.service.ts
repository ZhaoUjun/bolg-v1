import { Injectable } from '@angular/core';

export const LS_KEY={
  loginInfo:"loginInfo"
}

interface LoginInfo{
  authorId:string;
  authorName:string
}

@Injectable()
export class AuthService {

  loginInfo:LoginInfo;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(loginInfo:LoginInfo):void{
    this.loginInfo=loginInfo;
    localStorage.setItem(LS_KEY.loginInfo,JSON.stringify(loginInfo))
  }

  getLoginInfo():LoginInfo{
    return this.loginInfo||this.getLoginInfoFromLS();
  }

  isLoggedIn():boolean{
    return this.getLoginInfo()?true:false
  }

  getLoginInfoFromLS():LoginInfo{
    console.log(localStorage.getItem(LS_KEY.loginInfo))
    return JSON.parse(localStorage.getItem(LS_KEY.loginInfo))
  }

  removeLoginInfoFromLS():void{
    localStorage.removeItem(LS_KEY.loginInfo)
  }

  logout(): void {
    this.removeLoginInfoFromLS();
  }

}

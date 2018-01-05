
export class LoginForm{
  constructor(
    public account:string,
    public password:string,
    public captcha?:number,
  ){

  }
}

export interface ResponseVo{
  code:number;
  data:any;
  msg:string
}

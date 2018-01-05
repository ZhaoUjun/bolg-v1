import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { Router } from '@angular/router';
import {LoginForm,ResponseVo} from '../types'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  captcha:string;

  model=new LoginForm('','');

  msg:string;

  constructor(
    private loginService :LoginService,
    private router:Router
  ) {
    this.setCaptcha();
  }

  ngOnInit() {
    console.log(this)
  }

  onSubmit(e){
    this.loginService.handelSubmitLogin(this.model)
      .subscribe((res:ResponseVo)=>{
        if (res.code===0){
          this.router.navigateByUrl('/admin')
        }
        else {
          this.msg=res.msg
        }
      })
  }

  setCaptcha(){
    this.captcha=this.loginService.getCaptchaUrl();
  }

}

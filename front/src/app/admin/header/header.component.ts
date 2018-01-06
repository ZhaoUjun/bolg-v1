import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../share/auth.service'

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit() {
  }

  handleLogOut(){
    console.log(this.auth.getLoginInfo())
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module'
import { FormsModule }   from '@angular/forms';
import {ShareModule} from '../share/share.module'

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ShareModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginService } from './login.service'



import { LoginComponent} from './login/login.component'


const mainRoutes: Routes = [
  { path: '',
    component: LoginComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule],
  providers:[
    LoginService
  ]
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import {AuthGuard} from './auth-guard.service'


const appRoutes: Routes = [
  { path: '',
    loadChildren:'app/main/main.module#MainModule'
  },
  { path: 'admin',
    loadChildren:'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  { path: 'login',
    loadChildren:'app/login/login.module#LoginModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

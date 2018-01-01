import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home/index',
    pathMatch: 'full'
  },
  { path: 'admin',
    loadChildren:'app/admin/admin.module#AdminModule'
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

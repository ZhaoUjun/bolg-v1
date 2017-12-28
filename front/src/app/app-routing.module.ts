import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { AdminComponent } from './admin/admin.component'


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home/index',
    pathMatch: 'full'
  },
  { path: 'admin',
    redirectTo: '/admin/index',
    pathMatch: 'full'
  },
  {path: 'home', component: MainComponent},
  { path: 'admin',
    component: AdminComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { ArchivesComponent } from './archives/archives.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';


const mainRoutes: Routes = [
  { path: 'home',
    component: MainComponent,
    children:[
      { path: 'index',
        component: HomeComponent
      },
      { path: 'archives',
        component: ArchivesComponent
      },
      { path: 'about',
        component: AboutComponent
      },
      { path: 'article/:id',
        component: ArticleComponent
      },
    ],

  },


];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

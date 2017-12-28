import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component'
import { ArticlesComponent } from './articles/articles.component'
import { AddArticleComponent } from './add-article/add-article.component'
import { IndexComponent } from './index/index.component'


const mainRoutes: Routes = [
  { path: 'admin',
    component: AdminComponent,
    children:[
      { path: 'index',
        component: IndexComponent
      },
      { path: 'articles',
        component: ArticlesComponent
      },
      { path: 'add',
        component: AddArticleComponent
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

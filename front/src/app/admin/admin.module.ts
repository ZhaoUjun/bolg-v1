import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { RoutingModule } from './routing.module'

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { EditComponent } from './edit/edit.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component'
import { IndexComponent } from './index/index.component'



@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule
  ],
  exports:[
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    HeaderComponent,
    SideComponent,
    EditComponent,
    ArticlesComponent,
    AddArticleComponent,
    IndexComponent
  ]
})
export class AdminModule { }

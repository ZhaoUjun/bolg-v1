import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { RoutingModule } from './routing.module'

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component'
import { IndexComponent } from './index/index.component'
import { EditorComponent } from './editor/editor.component'
import { ShareModule } from '../share/share.module'
import { ArticleService } from './article.service';



@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ],
  exports:[
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    HeaderComponent,
    SideComponent,
    ArticlesComponent,
    AddArticleComponent,
    IndexComponent,
    EditorComponent,
  ],
  providers: [ArticleService ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownDirective } from './markdown.directive'
import { ArticleViewerComponent } from './article-viewer/article-viewer.component'
import { AuthService } from './auth.service';
import { PaginationComponent } from './pagination/pagination.component'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarkdownDirective,
    ArticleViewerComponent,
    PaginationComponent
  ],
  exports:[
    CommonModule,
    MarkdownDirective,
    ArticleViewerComponent,
    PaginationComponent

  ],
  providers:[
    AuthService
  ]
})
export class ShareModule { }

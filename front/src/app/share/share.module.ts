import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownDirective } from './markdown.directive'
import { ArticleViewerComponent } from './article-viewer/article-viewer.component'
import { AuthService } from './auth.service'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarkdownDirective,
    ArticleViewerComponent
  ],
  exports:[
    CommonModule,
    MarkdownDirective,
    ArticleViewerComponent,
  ],
  providers:[
    AuthService
  ]
})
export class ShareModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownDirective } from './markdown.directive'
import { ArticleViewerComponent } from './article-viewer/article-viewer.component'

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
    ArticleViewerComponent
  ]
})
export class ShareModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module'
import { ShareModule } from '../share/share.module'

import { MainComponent} from './main.component'
import { ArticleContainerComponent} from './home/article-container.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArchivesComponent } from './archives/archives.component';
import { ArticlePreviewComponent } from './home/article-preview.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { TagPanelComponent } from './tag-panel/tag-panel.component'
import { ArticleService } from './article.service';



@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ShareModule
  ],
  exports:[
    MainComponent
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ArchivesComponent,
    ArticlePreviewComponent,
    AboutComponent,
    ArticleComponent,
    ArticleDetailComponent,
    ArticleContainerComponent,
    TagPanelComponent
  ],
  providers: [ArticleService]
})
export class MainModule { }

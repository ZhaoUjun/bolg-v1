import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArchivesComponent } from './archives/archives.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePreviewComponent } from './home/component/article-preview/article-preview.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArchivesComponent,
    AboutComponent,
    ArticleComponent,
    ArticlePreviewComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service'
import { Store } from '@ngrx/store';
import {FetchArticle} from '../mainReducer'
import 'rxjs/add/operator/map';
import {Article} from '../types'
import {Observable} from "rxjs/Observable";

interface mainState{
  articles:Article[]
}

interface AppState {
  main: mainState;
}

@Component({
  selector: 'main-home',
  template: `<app-article-container [data]="articles$|async"></app-article-container>`,
})
export class HomeComponent implements OnInit {

  articles$:Observable<Article[]>;

  constructor(
    private articleService: ArticleService,
    private store: Store<AppState>
  ) {
    this.articles$ = store.select('main','articles');
  }

  ngOnInit() {
      this.articleService.getArticles()
        .subscribe(
          data=>this.store.dispatch(new FetchArticle(data)),
          error =>console.log(error)
        )
  }

}

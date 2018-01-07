import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {ArticleService} from '../article.service'
import {FetchArticle} from '../../share/actions/main'
import {AppState} from '../../share/reducers'
import {Article} from '../types'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/do';



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
    this.articles$ = store.select('main','tag')
      .map(tag=>this.articleService.getArticles(tag?tag.id:''))
      .mergeAll()
      .do(data=>this.store.dispatch(new FetchArticle(data)))
      .map(()=>store.select('main','articles'))
      .mergeAll()
    ;
  }

  ngOnInit() {

  }
}

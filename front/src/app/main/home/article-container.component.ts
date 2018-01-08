import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { Store,Action } from '@ngrx/store';
import {ArticleService} from '../article.service'
import {
  FetchArticle,
  ChangePage
} from '../../share/actions/main'
import {AppState} from '../../share/reducers'
import {Article} from '../types'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/combineLatest'



@Component({
  selector: 'app-article-container',
  template: `
    <div class="container">
      <app-article-preview *ngFor="let article of articles$|async" [data]="article"></app-article-preview>
      <app-pagination 
        class="pagination" 
        [currentPage]="currentPage$|async"
        [AddAction]="addPageAction$|async"
        [ReduceAction]="reducePageAction$|async"
        [maxPage]="100" 
      ></app-pagination>
    </div>
  `,
  styles:[`
    .container{position: relative;padding-bottom: 40px}
    .pagination{position: absolute;bottom: 0;width: 100%}
  `]
})
export class ArticleContainerComponent implements OnInit,OnChanges {

  addPageAction$:Observable<Action>;

  reducePageAction$:Observable<Action>;

  articles$:Observable<Article[]>;

  currentPage$:Observable<number>;

  constructor(
    private articleService: ArticleService,
    private store: Store<AppState>
  ){
    const tag$=store.select('main','tag');
    this.currentPage$=store.select('main','currentPage');
    this.articles$ =Observable.combineLatest(tag$,this.currentPage$)
      .debounceTime(0)
      .map(([tag,page])=>this.articleService.getArticles(tag?tag.id:'',page))
      .mergeAll()
      .do(data=>this.store.dispatch(new FetchArticle(data)))
      .map(()=>store.select('main','articles'))
      .mergeAll();
    this.addPageAction$=this.currentPage$
      .map(page=>new ChangePage(page+1));
    this.reducePageAction$=this.currentPage$
      .map(page=>new ChangePage(page-1));
  }

  ngOnInit() {
  }

  ngOnChanges(data){

  }



}

import { Component, OnInit ,Input} from '@angular/core';
import { Article } from '../types'
import {ArticleService} from '../article.service'
import { Store } from '@ngrx/store';
import {FetchArticle,SelectTag} from '../../share/actions/main'
import 'rxjs/add/operator/map';


interface mainState{
  articles:Article[]
}

interface AppState {
  main: mainState;
}
@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  showAll:boolean=false;

  @Input()
  data:Article;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  toggleShowAll(id:number):void{
    this.showAll=!this.showAll;
  }

  searchArticle(tag){
    this.store.dispatch(new SelectTag(tag))
  }

}

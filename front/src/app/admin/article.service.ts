import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Article} from './type'
import {Observable} from 'rxjs/Observable'

interface ItemsResponse {
  code: string;
  data:Article[];
  msg:string
}

@Injectable()
export class ArticleService {

  article:Article;


  constructor(
    private http: HttpClient
  ) {

  }

  getArticle():Article{
    return this.article
  }

  updateArticle(article:Article):Observable<Article>{
    return Observable.of(this.article)
  }

  addArticle(data:Article){
    return this.http.post('/admin/article',data)
  }


}

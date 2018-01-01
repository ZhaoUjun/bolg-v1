import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Article} from './type'
import {Observable} from 'rxjs/observable'

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
    return this.http.post('http://127.0.0.1:3000/admin/article',data)
  }


}

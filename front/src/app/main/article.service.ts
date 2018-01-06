import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article,ArticleResponse} from './types'
import {Observable} from 'rxjs/observable'
import {joinQueryString} from '../utils'




@Injectable()
export class ArticleService {

  articles:Article[];

  constructor(
    private http:HttpClient
  ) { }

  getArticles(tagId?:string,pageNo=1):Observable<any>{
    const url=joinQueryString('/home?',{
      tagId,
      pageNo
    });
    return this.http
      .get<ArticleResponse>(url)
      .map(res=>res.data)
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article,ArticleResponse,CommonResponse} from './types'
import {Observable} from 'rxjs/Observable'
import {joinQueryString} from '../utils'




@Injectable()
export class ArticleService {

  articles:Article[];

  constructor(
    private http:HttpClient
  ) { }

  getArticles(tagId?:string|number,pageNo=1):Observable<any>{
    const url=joinQueryString('/home?',{
      tagId,
      pageNo
    });
    return this.http
      .get<ArticleResponse>(url)
      .map(res=>res.data)
  }

  addViewTimes(articleId:number):Observable<any>{
    const url=joinQueryString('/home/add-view-times?',{
      articleId
    });
    return this.http
      .get<CommonResponse>(url)
  }

}

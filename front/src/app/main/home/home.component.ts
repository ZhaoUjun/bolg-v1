import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

class Tag{
  id:number;
  name:string
}

export class Article{
  id:number;
  name:string;
  createTime:number;
  tags:Tag[];
  content:string;
  title:string;
  readCnt:number;
}

interface ItemsResponse {
  code: string;
  data:Article[];
  msg:string
}

@Component({
  selector: 'main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles:Article[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http
        .get<ItemsResponse>('/home')
        .map(res=>res.data)
        .subscribe(data=>{
          this.articles=data
        })
  }

}

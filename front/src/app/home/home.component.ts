import { Component, OnInit } from '@angular/core';

export class Article{
  id:number;
  name:string;
  createTime:number;
  tags:string[];
  content:string;
  title:string;
  readCnt:number;
}

const data=[
  {
    id:1,
    name:'me',
    createTime:1321331321,
    tags:['13213'],
    content:'很多人想知道rx在项目中具体表现怎样，本期很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样...',
    title:'Rx进阶之路',
    readCnt:32131
  },
  {
    id:1,
    name:'me',
    createTime:1321331321,
    tags:['13213'],
    content:'很多人想知道rx在项目中具体表现怎样，本期很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样...',
    title:'Rx进阶之路',
    readCnt:32131
  },
  {
    id:1,
    name:'me',
    createTime:1321331321,
    tags:['13213'],
    content:'很多人想知道rx在项目中具体表现怎样，本期很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样...',
    title:'Rx进阶之路',
    readCnt:32131
  },
  {
    id:1,
    name:'me',
    createTime:1321331321,
    tags:['13213'],
    content:'很多人想知道rx在项目中具体表现怎样，本期很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样...',
    title:'Rx进阶之路',
    readCnt:32131
  },
  {
    id:1,
    name:'me',
    createTime:1321331321,
    tags:['13213'],
    content:'很多人想知道rx在项目中具体表现怎样，本期很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样...',
    title:'Rx进阶之路',
    readCnt:32131
  },
  {
    id:1,
    name:'me',
    createTime:1321331321,
    tags:['13213'],
    content:'很多人想知道rx在项目中具体表现怎样，本期很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样很多人想知道rx在项目中具体表现怎样...',
    title:'Rx进阶之路',
    readCnt:32131
  },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles:Article[]=data;

  constructor() { }

  ngOnInit() {
  }

}

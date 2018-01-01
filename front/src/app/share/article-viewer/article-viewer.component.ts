import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})
export class ArticleViewerComponent implements OnInit {


  @Input() content:string;


  constructor() { }

  ngOnInit() {

  }

}

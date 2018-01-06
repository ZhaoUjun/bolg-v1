import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { Article } from '../types'


@Component({
  selector: 'app-article-container',
  template: `
    <div class="container">
      <app-article-preview *ngFor="let article of data" [data]="article"></app-article-preview>
      <app-pagination class="pagination"></app-pagination>
    </div>
  `,
  styles:[`
    .container{position: relative;padding-bottom: 40px}
    .pagination{position: absolute;bottom: 0;width: 100%}
  `]
})
export class ArticleContainerComponent implements OnInit,OnChanges {


  @Input()
  data:Article[];

  ngOnInit() {
  }

  ngOnChanges(data){
    console.log(this.data)
  }



}

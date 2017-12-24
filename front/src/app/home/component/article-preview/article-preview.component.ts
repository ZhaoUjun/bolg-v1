import { Component, OnInit ,Input} from '@angular/core';
import { Article } from '../../home.component'

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  showAll:boolean=false;

  @Input()
  data:Article;

  detail:string='test';

  constructor() { }

  ngOnInit() {
  }

  toggleShowAll(id:number):void{
    this.showAll=!this.showAll;
  }

}

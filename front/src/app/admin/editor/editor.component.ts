import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ArticleService} from '../article.service'
import { Article,Tag } from '../type'



@Component({
  selector: 'article-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Output() articleChange:EventEmitter<string>=new EventEmitter<string>();

  articleForm:FormGroup;

  tagOptions = [
    {name: 'JS', id: '0'},
    {name: 'react', id: '1'},
    {name: 'rx', id: '2'},
  ];




  constructor(
    private fb :FormBuilder,
    private articleSV:ArticleService
  ) {
    this.createForm();
    this.subscribeContentChange();
  }

  createForm() {
    this.articleForm = this.fb.group({
      title: '2121', // <--- the FormControl called "name"
      content:'',
      tagIds:''
    });
  }

  ngOnInit() {
  }

  subscribeContentChange(){
    const contentControl=this.articleForm.get('content');
    const { valueChanges }=contentControl;
    valueChanges.subscribe(value=>this.articleChange.emit(value))
  }

  handleSave(){
    this.articleSV.addArticle(this.articleForm.value)
      .subscribe(
        res=>{
        console.log(res)
      },
        err=>{
        console.log(err.message)
      })
  }

  handleSubmit(){

  }

}

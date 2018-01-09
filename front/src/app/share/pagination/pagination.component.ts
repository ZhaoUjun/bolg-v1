import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Store} from '@ngrx/store'
import {AppState} from '../reducers'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPage:number;

  @Input()
  AddAction:any;

  @Input()
  maxPage:number;

  @Input()
  ReduceAction:any;

  constructor(
    private store :Store<AppState>
  ) { }

  ngOnInit() {
  }

  addPage(e){
    this.store.dispatch(this.AddAction)
  }

  reducePage(e){
    this.store.dispatch(this.ReduceAction)

  }



}

import { Action } from '@ngrx/store';
import {Article,Tag} from '../../main/types'




export enum MainTypes {
  FETCH_ARTICLES = '[Article] fetch',
  SELECT_TAG='[Article] select_tag',
  CLEAR_TAG='[Article] clear_tag',
  CHANGE_PAGE='[Article] change_page'
}

export interface MainPayload{
  articles?:Article[];
  tag?:Tag;
  currentPage?:number
}

export class FetchArticle implements Action {
  readonly type = MainTypes.FETCH_ARTICLES;
  public payload:MainPayload;
  constructor(private articles: Article[]) {
    this.payload={articles}
  }
}

export class ChangePage implements Action {
  readonly type = MainTypes.CHANGE_PAGE;
  public payload:MainPayload;
  constructor(private currentPage: number) {
    this.payload={currentPage}
  }
}

export class SelectTag implements Action {
  readonly type = MainTypes.SELECT_TAG;
  public payload:MainPayload;
  constructor(private tag: Tag) {
    this.payload={tag,currentPage:1}
  }
}

export class ClearTag implements Action {
  readonly type = MainTypes.CLEAR_TAG;
  public payload:MainPayload;
  constructor() {
    this.payload={tag:null}
  }
}


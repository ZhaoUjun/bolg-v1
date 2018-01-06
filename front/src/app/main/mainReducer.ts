import { Action } from '@ngrx/store';
import {Article} from './types'

export enum CounterActionTypes {
  FETCH_ARTICLES = '[Article] fetch',
}

export class FetchArticle implements Action {
  readonly type = CounterActionTypes.FETCH_ARTICLES;
  constructor(public payload: Article[]) {}
}

export function main(state: Article[], action: FetchArticle) {
  switch (action.type) {
    case CounterActionTypes.FETCH_ARTICLES:
      return {...state,articles:action.payload}

  }
}

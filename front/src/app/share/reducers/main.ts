import {
  MainTypes,
} from '../actions/main'
import {createReducer} from '../../utils'

export const initialState={
  currentPage:1,
  articles:[]
};


export const main=createReducer(MainTypes);


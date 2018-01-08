import {
  MainTypes,
} from '../actions/main'
import {createReducer} from '../../utils'

export const initialState={
  currentPage:1,
};


export const main=createReducer(MainTypes);


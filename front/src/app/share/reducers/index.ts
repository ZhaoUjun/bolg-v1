import {main,initialState} from './main';
import {MainPayload} from '../actions/main'

export interface AppState {
  main: MainPayload;
}
export const initState:AppState={
  main:initialState
}
export const reducers ={
  main
};

import {main} from './main';
import {MainPayload} from '../actions/main'

export interface AppState {
  main: MainPayload;
}
export const reducers :AppState={
  main
};

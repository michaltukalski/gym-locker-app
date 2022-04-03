import * as lockersReducer from './lockers.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<{}> = {
  lockersData: lockersReducer.reducer
};

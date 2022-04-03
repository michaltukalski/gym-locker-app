import * as fromDataReducer from './../reducers/lockers.reducer';
import { LockersState, LockerReducer } from './../reducers/lockers.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getDataState = createFeatureSelector<LockersState>('lockersData');

export const getLockers = createSelector(
  getDataState,
  fromDataReducer.lockersData
);

export const queueEmpty = createSelector(
  getDataState,
  fromDataReducer.queueEmpty
);

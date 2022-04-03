import { createReducer, on, Action } from '@ngrx/store';
import { Locker } from 'src/app/models/locker.model';
import { DataActions, LockersActions } from '../actions';
import { LockerStatus } from 'src/app/enums/locker-status.enum';

export interface LockersState {
  lockers: Locker[];
  lockingQueue: number[];
}

export const initialState: LockersState = {
  lockers: [],
  lockingQueue: []
};

export const reducer = createReducer(
  initialState,

  on(DataActions.LockersDataSuccess, (state, {lockers}) => ({
    ...state,
    lockers,
    lockingQueue: arrangeLockingQueue(lockers)
  })),

  on(LockersActions.reserveLocker, (state) => ({
    ...state,
    lockers: markSelected(state),
    lockingQueue: updateLockingQueue(state)
  })),
);

function arrangeLockingQueue(lockers: Locker[]): number[] {
  return lockers.map(locker => locker.id)
            .sort((a, b) => ((a % 2 - b % 2) || a - b))
            .filter(lockerId => lockers[lockerId].status === LockerStatus.FREE);
}

function markSelected(state: LockersState): Locker[] {
  return state.lockers.map(locker => locker.id === state.lockingQueue[0] ?
      {...locker, status: LockerStatus.SELECTED} :
      (locker.status !== LockerStatus.FREE ? {...locker, status: LockerStatus.OCCUPIED} : locker)
    );
}

function updateLockingQueue(state: LockersState): number[] {
  return state.lockingQueue.filter((value, index) => index !== 0);
}

export function LockerReducer(state: LockersState | undefined, action: Action) {
  return reducer (state, action);
}

export const lockersData = (state: LockersState) => state.lockers;
export const queueEmpty = (state: LockersState) => state.lockingQueue.length === 0;

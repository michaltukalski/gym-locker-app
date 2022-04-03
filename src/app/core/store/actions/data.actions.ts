import { Locker } from './../../../models/locker.model';
import { createAction, props } from '@ngrx/store';

export const LockersDataRequested = createAction('[Lockers Actions] Lockers Data Requested');
export const LockersDataSuccess = createAction('[Lockers Actions] Lockers Data Success', props<{ lockers: Locker[] }>());

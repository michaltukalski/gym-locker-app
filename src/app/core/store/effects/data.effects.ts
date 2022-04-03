import { LockersDataService } from './../../services/lockers-data.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMapTo, exhaustMap } from 'rxjs/operators';
import { DataActions } from '../actions';

@Injectable()
export class DataEffects {
  constructor(private store: Store, private actions$: Actions, private service: LockersDataService){

  }

  loadLockersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.LockersDataRequested),
      exhaustMap(() => {
        return this.service.loadData().pipe(
          map(lockers => DataActions.LockersDataSuccess({lockers}))
        );
      })
    ));


}

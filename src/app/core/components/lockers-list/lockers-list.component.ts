import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataSelectors } from '../../store/selectors';

import { Locker } from 'src/app/models/locker.model';
import { LockersActions } from '../../store/actions';

@Component({
  selector: 'app-locker-list',
  templateUrl: './lockers-list.component.html',
  styleUrls: ['./lockers-list.component.scss']
})

export class LockersListComponent{

  lockersData$ = this.store.select(DataSelectors.getLockers);
  queueEmpty$ = this.store.select(DataSelectors.queueEmpty);
  lockers: Locker[] = [];

  constructor(private store: Store) { }

  reserveLocker(){
    this.store.dispatch(LockersActions.reserveLocker());
  }
}


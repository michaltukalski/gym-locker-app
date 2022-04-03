import { LockerStatus } from './../../enums/locker-status.enum';
import { Locker } from 'src/app/models/locker.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LockersDataService {

  constructor() { }

  loadData(): Observable<Locker[]>{
    const lockersQuantity = Math.floor(Math.random() * (16 - 8)) + 8;
    return of(this.prepareData(lockersQuantity));
  }

  private prepareData(lockersQuantity: number): Locker[]{
    return [ ...Array(lockersQuantity).keys() ].map( i => new Locker({status: (i < 5 && i%2 === 0)  ? LockerStatus.OCCUPIED : LockerStatus.FREE, id: i}));
  }
}

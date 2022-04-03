import { Component, Input } from '@angular/core';
import { Locker } from 'src/app/models/locker.model';
import { LockerStatus } from 'src/app/enums/locker-status.enum';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss']
})

export class LockerComponent {
  @Input()locker: Locker;

  get isStatusFree(){
    return this.locker.status === LockerStatus.FREE
  }

  get isStatusOccupied(){
    return this.locker.status === LockerStatus.OCCUPIED
  }

  get isStatusSelected(){
    return this.locker.status === LockerStatus.SELECTED
  }
}

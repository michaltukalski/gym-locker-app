import { LockerStatus } from './../enums/locker-status.enum';

export class Locker {
  status: LockerStatus = LockerStatus.FREE;
  id: number = -1;

  constructor (props = {}) {
    Object.assign(this, props)
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LockersListComponent } from './components/lockers-list/lockers-list.component';
import { LockerComponent } from './components/locker/locker.component';
import { RootStoreModule } from './store/root-store.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [LockersListComponent, LockerComponent],
  imports: [
    CommonModule,
    RootStoreModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [

  ]
})
export class CoreModule { }

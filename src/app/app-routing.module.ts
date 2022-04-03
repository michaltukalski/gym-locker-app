import { LockersListComponent } from './core/components/lockers-list/lockers-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathConstantSegments } from './core/constants/pathConstantsSegments';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PathConstantSegments.Lockers,
  },
  {
    path: PathConstantSegments.Lockers,
    component: LockersListComponent
    // canActivate: [RootGuard],
    // loadChildren: () => import(`./core/core.module`).then(m => m.CoreModule),
  },
  {
    path: '**',
    redirectTo: PathConstantSegments.Lockers
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

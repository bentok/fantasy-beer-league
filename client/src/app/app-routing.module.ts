import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard.service';
import { FblDashboardComponent } from './fbl-dashboard/fbl-dashboard.component';
import { FblLoginComponent } from './fbl-login/fbl-login.component';
import { FblRegisterComponent } from './fbl-register/fbl-register.component';
import { FblProfileComponent } from './fbl-profile/fbl-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: FblLoginComponent,
  },
  {
    path: 'register',
    component: FblRegisterComponent,
  },
  {
    path: 'dashboard',
    component: FblDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: FblProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FblDashboardComponent } from './fbl-dashboard/fbl-dashboard.component';
import { FblLoginComponent } from './fbl-login/fbl-login.component';
import { FblRegisterComponent } from './fbl-register/fbl-register.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FblDashboardComponent } from './fbl-dashboard/fbl-dashboard.component';
import { FblLoginComponent } from './fbl-login/fbl-login.component';

const routes: Routes = [
  {
    path: '',
    component: FblLoginComponent,
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

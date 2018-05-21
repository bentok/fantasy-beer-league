import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FblDashboardComponent } from './fbl-dashboard/fbl-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FblDashboardComponent,
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

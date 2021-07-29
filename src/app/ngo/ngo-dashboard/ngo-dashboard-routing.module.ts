import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgoDashboardPage } from './ngo-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: NgoDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgoDashboardPageRoutingModule {}

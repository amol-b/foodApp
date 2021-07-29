import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptorDashboardPage } from './acceptor-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptorDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptorDashboardPageRoutingModule {}

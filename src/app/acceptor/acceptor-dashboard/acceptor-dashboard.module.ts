import { NgModule } from '@angular/core';

import { AcceptorDashboardPageRoutingModule } from './acceptor-dashboard-routing.module';
import { AcceptorDashboardPage } from './acceptor-dashboard.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AcceptorDashboardPageRoutingModule
  ],
  declarations: [AcceptorDashboardPage]
})
export class AcceptorDashboardPageModule {}

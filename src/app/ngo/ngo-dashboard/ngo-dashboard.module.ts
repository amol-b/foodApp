import { NgModule } from '@angular/core';

import { NgoDashboardPageRoutingModule } from './ngo-dashboard-routing.module';
import { NgoDashboardPage } from './ngo-dashboard.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NgoDashboardPageRoutingModule
  ],
  declarations: [NgoDashboardPage]
})
export class NgoDashboardPageModule {}

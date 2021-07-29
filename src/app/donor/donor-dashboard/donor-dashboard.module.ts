import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorDashboardPageRoutingModule } from './donor-dashboard-routing.module';

import { DonorDashboardPage } from './donor-dashboard.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DonorDashboardPageRoutingModule
  ],
  declarations: [DonorDashboardPage]
})
export class DonorDashboardPageModule {}

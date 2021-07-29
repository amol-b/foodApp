import { NgModule } from '@angular/core';

import { DonationPageRoutingModule } from './donation-routing.module';
import { DonationPage } from './donation.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DonationPageRoutingModule
  ],
  declarations: [DonationPage]
})
export class DonationPageModule {}

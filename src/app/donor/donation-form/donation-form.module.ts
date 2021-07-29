import { NgModule } from '@angular/core';

import { DonationFormPageRoutingModule } from './donation-form-routing.module';
import { DonationFormPage } from './donation-form.page';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DonationFormPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [DonationFormPage]
})
export class DonationFormPageModule {}

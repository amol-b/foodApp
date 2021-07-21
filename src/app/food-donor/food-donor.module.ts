import { NgModule } from '@angular/core';

import { FoodDonorPageRoutingModule } from './food-donor-routing.module';
import { FoodDonorPage } from './food-donor.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FoodDonorPageRoutingModule,
    SharedModule
  ],
  declarations: [FoodDonorPage]
})
export class FoodDonorPageModule {}

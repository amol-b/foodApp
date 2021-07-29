import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationFormPage } from './donation-form.page';

const routes: Routes = [
  {
    path: '',
    component: DonationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationFormPageRoutingModule {}

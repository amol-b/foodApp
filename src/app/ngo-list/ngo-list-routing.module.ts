import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgoListPage } from './ngo-list.page';

const routes: Routes = [
  {
    path: '',
    component: NgoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgoListPageRoutingModule {}

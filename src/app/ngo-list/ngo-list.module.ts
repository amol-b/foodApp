import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgoListPageRoutingModule } from './ngo-list-routing.module';

import { NgoListPage } from './ngo-list.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    NgoListPageRoutingModule
  ],
  declarations: [NgoListPage]
})
export class NgoListPageModule {}

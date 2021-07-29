import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DonationlistComponent } from './donationlist/donationlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderComponent,
    DonationlistComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SideMenuComponent,
    HeaderComponent,
    HttpClientModule,
    DonationlistComponent
  ]
})
export class SharedModule { }

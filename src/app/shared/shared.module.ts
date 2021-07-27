import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SideMenuComponent,
    HeaderComponent,
    HttpClientModule
  ]
})
export class SharedModule { }

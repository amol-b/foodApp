import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { NgoListService } from './services/ngo-list.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [ ApiService, NgoListService]
})
export class CoreModule { }

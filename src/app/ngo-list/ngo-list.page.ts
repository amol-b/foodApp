import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, takeUntil, takeWhile } from 'rxjs/operators';
import { NgoListService } from '../core/services/ngo-list.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.page.html',
  styleUrls: ['./ngo-list.page.scss'],
})
export class NgoListPage implements OnInit, OnDestroy {

  ngolist = [];
  componentActive = true;
  isListFetching = false;
  constructor(private service: NgoListService) { }

  ngOnInit() {
    this.isListFetching = true;
    this.service.getNgoList().pipe(takeWhile( () => this.componentActive)).subscribe(data => {
      this.ngolist = data;
      console.log(data);
      this.isListFetching = false;
    });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}

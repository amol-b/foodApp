import { Component, OnInit } from '@angular/core';
import { take, takeUntil, takeWhile } from 'rxjs/operators';
import { NgoListService } from '../core/services/ngo-list.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.page.html',
  styleUrls: ['./ngo-list.page.scss'],
})
export class NgoListPage implements OnInit {

  ngolist = [];
  componentActive = true;
  constructor(private service: NgoListService) { }

  ngOnInit() {
    this.service.getNgoList().pipe(takeWhile( () => this.componentActive)).subscribe(data => {
      this.ngolist = data;
    });
  }
}

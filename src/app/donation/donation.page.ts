import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {
  donation: any;

  constructor(private location: Location) { }

  ngOnInit() {
    this.donation = this.location.getState();
  }

}

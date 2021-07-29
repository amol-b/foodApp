import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonationService } from '../core/services/donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {
  donation: any;
  isDataFetching = false;

  constructor(private route: ActivatedRoute,
    private donationService: DonationService) { }

  ngOnInit() {
    this.isDataFetching = true;
    this.route.params.subscribe(params => {
       this.donationService.getDonation(params.id).subscribe(response => {
        this.isDataFetching = false;
        this.donation = response.one_restaurant_data;
      });

    });

  }

}

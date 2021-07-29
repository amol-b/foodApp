import { Component, OnInit } from '@angular/core';
import { DonationlistService } from '../core/services/donationlist.service';

@Component({
  selector: 'app-food-donor',
  templateUrl: './food-donor.page.html',
  styleUrls: ['./food-donor.page.scss'],
})
export class FoodDonorPage implements OnInit {
  donations: any[];
  isListFetching = false;

  constructor(private donationListService: DonationlistService) { }

  ngOnInit() {
    this.isListFetching = true;
    this.donationListService.getAllDonations().subscribe((response) => {
      console.log(response);
      this.donations = response.all_restaurant_data;
      this.isListFetching = false;
    });
  }

}

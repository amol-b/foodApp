import { Component, OnInit } from '@angular/core';
import { DonationlistService } from '../../core/services/donationlist.service';

@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.page.html',
  styleUrls: ['./donor-dashboard.page.scss'],
})
export class DonorDashboardPage implements OnInit {

  donations: any[];
  isListFetching = false;

  constructor(private donationListService: DonationlistService) { }

  ngOnInit() {
    this.isListFetching = true;
    this.donationListService.getAllDonations().subscribe((response) => {
      this.donations = response.all_restaurant_data === 'NOTHING TO BE FOUND' ? undefined : response.all_restaurant_data;
      this.isListFetching = false;
    });
  }

}

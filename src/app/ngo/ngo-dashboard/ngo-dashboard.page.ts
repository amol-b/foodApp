import { Component, OnInit } from '@angular/core';
import { DonationlistService } from 'src/app/core/services/donationlist.service';

@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './ngo-dashboard.page.html',
  styleUrls: ['./ngo-dashboard.page.scss'],
})
export class NgoDashboardPage implements OnInit {

  donations: any[];
  isListFetching = false;

  constructor(private donationListService: DonationlistService) { }

  ngOnInit() {
    this.isListFetching = true;
    this.donationListService.getAllDonations().subscribe((response) => {
      this.donations = response.all_restaurant_data === 'NOTHING TO BE FOUND' ? undefined : response.all_restaurant_data;
      console.log(this.donations);

      this.isListFetching = false;
    });
  }
}

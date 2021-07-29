import { Component, OnInit } from '@angular/core';
import { DonationlistService } from 'src/app/core/services/donationlist.service';

@Component({
  selector: 'app-acceptor-dashboard',
  templateUrl: './acceptor-dashboard.page.html',
  styleUrls: ['./acceptor-dashboard.page.scss'],
})
export class AcceptorDashboardPage implements OnInit {

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

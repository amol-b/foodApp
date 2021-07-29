import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donationlist',
  templateUrl: './donationlist.component.html',
  styleUrls: ['./donationlist.component.scss'],
})
export class DonationlistComponent implements OnInit {
  @Input() donation;

  constructor() { }

  ngOnInit() {}

}

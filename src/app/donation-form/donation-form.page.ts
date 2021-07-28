import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DonationService } from '../core/services/donation.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.page.html',
  styleUrls: ['./donation-form.page.scss'],
})
export class DonationFormPage implements OnInit {
  donationForm: FormGroup;

  constructor(private donationService: DonationService) { }

  ngOnInit() {
    this.donationForm = new FormGroup({
      foodCategory: new FormControl('', {
        validators: [Validators.required]
      }),
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      address: new FormControl('', {
        validators: [Validators.required]
      }),
      contactNumber: new FormControl(''),
      pickupDate: new FormControl('', {
        validators: [Validators.required]
      }),
      pickupStartTime: new FormControl('', {
        validators: [Validators.required]
      }),
      pickupEndTime: new FormControl('', {
        validators: [Validators.required]
      }),
      additionalInfo: new FormControl(''),
      photo: new FormControl('')
    });
  }

  onSubmit() {
      const payload = {
        _id: 'test user',
        name: 'test user',
        photograph: this.donationForm.get('photo').value,
        address: 'test',
        cuisine_type: this.donationForm.get('foodCategory').value,
        additional_information: this.donationForm.get('additionalInfo').value,
        donation_hours: [{
            date: this.donationForm.get('additionalInfo').value,
            quantity: this.donationForm.get('additionalInfo').value,
            packed: 'Packed',
            pickup: 'Pickup',
            address: this.donationForm.get('address').value,
          }],
      };
      this.donationService.addDonation(payload).subscribe((response) => {
        console.log(response);
      });
  }

}


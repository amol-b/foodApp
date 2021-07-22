import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.page.html',
  styleUrls: ['./donation-form.page.scss'],
})
export class DonationFormPage implements OnInit {
  donationForm: FormGroup;

  constructor() { }

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
      photos: new FormControl('')
    });
  }
}


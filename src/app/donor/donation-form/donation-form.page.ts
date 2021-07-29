import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DonationService } from '../../core/services/donation.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.page.html',
  styleUrls: ['./donation-form.page.scss'],
})
export class DonationFormPage implements OnInit, OnDestroy {
  donationForm: FormGroup;
  componentActive = true;
  isSubmitionInProgress = false;

  constructor(private router: Router,
    private donationService: DonationService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.donationForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
      }),
      foodCategory: new FormControl('', {
        validators: [Validators.required],
      }),
      title: new FormControl('', {
        validators: [Validators.required],
      }),
      address: new FormControl('', {
        validators: [Validators.required],
      }),
      contactno: new FormControl('', {
        validators: [Validators.required],
      }),
      quantity: new FormControl(''),
      pickupDate: new FormControl('', {
        validators: [Validators.required],
      }),
      pickupStartTime: new FormControl('', {
        validators: [Validators.required],
      }),
      pickupEndTime: new FormControl('', {
        validators: [Validators.required],
      }),
      additionalInfo: new FormControl(''),
      photo: new FormControl(''),
    });

    // this.donationService
    //   .getDonations()
    //   .pipe(takeWhile(() => this.componentActive))
    //   .subscribe((data) => {
    //     console.log('data', data);
    //   });
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  onSubmit() {
    this.isSubmitionInProgress = true;
    const payload = {
      _id: this.donationForm.get('name').value,
      name: this.donationForm.get('name').value,
      photograph: this.donationForm.get('photo').value,
      food_title: this.donationForm.get('title').value,
      address: 'test',
      submission_date: new Date(),
      category: this.donationForm.get('foodCategory').value,
      additional_information: this.donationForm.get('additionalInfo').value,
      donation_hours: [{
          date: this.donationForm.get('pickupDate').value,
          quantity: this.donationForm.get('quantity').value,
          pickuptime: `${this.donationForm.get('pickupStartTime').value} - ${this.donationForm.get('pickupEndTime').value}`,
          address: this.donationForm.get('address').value,
        }],
    };

    this.donationService.addDonation(payload).subscribe((response) => {
      this.isSubmitionInProgress = false;
      this.alertController.create({
        header: 'Confirmation',
        message: 'Do you want to make another donation?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.router.navigate(['donor']);
            }
          },
          {
            text: 'Yes',
            handler: (examID) => {
              this.donationForm.reset();
            }
          }
        ]
      }).then(res => {
        res.present();
      });
    });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}

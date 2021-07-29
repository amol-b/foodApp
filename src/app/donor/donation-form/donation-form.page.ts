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
  base64Img: string;

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
    const pickupStartTime = new Date(this.donationForm.get('pickupStartTime').value).toLocaleTimeString();
    const pickupEndTime = new Date(this.donationForm.get('pickupEndTime').value).toLocaleTimeString();
    const currDate = new Date();
    const submissionDate = this.getFormattedDate(currDate);
    const payload = {
      _id: this.donationForm.get('name').value,
      name: this.donationForm.get('name').value,
      photograph: `data:image/jpeg;base64,${this.base64Img}`,
      food_title: this.donationForm.get('title').value,
      address: 'test',
      submission_date: submissionDate,
      category: this.donationForm.get('foodCategory').value,
      additional_information: this.donationForm.get('additionalInfo').value,
      donation_hours: [{
          date: this.getFormattedDate(new Date(this.donationForm.get('pickupDate').value)),
          quantity: this.donationForm.get('quantity').value,
          pickuptime: `${pickupStartTime} - ${pickupEndTime}`,
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

  getFormattedDate(currDate) {
    return `${currDate.getUTCMonth() + 1}/${currDate.getUTCDate()}/${currDate.getUTCFullYear()}`;
  }

  onFileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.handleInputChange(file); //turn into base64
    }
  }

  handleInputChange(files) {
    const file = files;
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e) {
    const reader = e.target;
    this.base64Img = reader.result.substr(reader.result.indexOf(',') + 1);
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}

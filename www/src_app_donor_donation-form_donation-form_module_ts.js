(self["webpackChunkfoodApp"] = self["webpackChunkfoodApp"] || []).push([["src_app_donor_donation-form_donation-form_module_ts"],{

/***/ 426:
/*!*********************************************************************!*\
  !*** ./src/app/donor/donation-form/donation-form-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationFormPageRoutingModule": () => (/* binding */ DonationFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _donation_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-form.page */ 8516);




const routes = [
    {
        path: '',
        component: _donation_form_page__WEBPACK_IMPORTED_MODULE_0__.DonationFormPage
    }
];
let DonationFormPageRoutingModule = class DonationFormPageRoutingModule {
};
DonationFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DonationFormPageRoutingModule);



/***/ }),

/***/ 8004:
/*!*************************************************************!*\
  !*** ./src/app/donor/donation-form/donation-form.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationFormPageModule": () => (/* binding */ DonationFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _donation_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-form-routing.module */ 426);
/* harmony import */ var _donation_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation-form.page */ 8516);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);






let DonationFormPageModule = class DonationFormPageModule {
};
DonationFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _donation_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.DonationFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_donation_form_page__WEBPACK_IMPORTED_MODULE_1__.DonationFormPage]
    })
], DonationFormPageModule);



/***/ }),

/***/ 8516:
/*!***********************************************************!*\
  !*** ./src/app/donor/donation-form/donation-form.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationFormPage": () => (/* binding */ DonationFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_donation_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./donation-form.page.html */ 9922);
/* harmony import */ var _donation_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation-form.page.scss */ 6295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _core_services_donation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/donation.service */ 286);








let DonationFormPage = class DonationFormPage {
    constructor(router, donationService, alertController) {
        this.router = router;
        this.donationService = donationService;
        this.alertController = alertController;
        this.componentActive = true;
        this.isSubmitionInProgress = false;
    }
    ngOnInit() {
        this.donationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            foodCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            contactno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            pickupDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            pickupStartTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            pickupEndTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            }),
            additionalInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
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
        const fileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];
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
};
DonationFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _core_services_donation_service__WEBPACK_IMPORTED_MODULE_2__.DonationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
DonationFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-donation-form',
        template: _raw_loader_donation_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_donation_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DonationFormPage);



/***/ }),

/***/ 6295:
/*!*************************************************************!*\
  !*** ./src/app/donor/donation-form/donation-form.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".upload-photo {\n  display: flex;\n  align-items: center;\n}\n.upload-photo ion-icon {\n  margin-left: 10px;\n  font-size: 20px;\n}\nlabel {\n  color: var(--ion-color-primary);\n}\ninput, ion-input, ion-textarea {\n  padding-left: 5px;\n  text-align: right;\n}\nion-spinner {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0aW9uLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0E7RUFDRSwrQkFBQTtBQUVGO0FBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR0YiLCJmaWxlIjoiZG9uYXRpb24tZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLXBob3RvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW9uLWljb257XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxubGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuaW5wdXQsIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaW9uLXNwaW5uZXJ7XHJcbiAgd2lkdGg6MjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 9922:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donation-form/donation-form.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content color=\"primary\" class=\"ion-no-padding\" id=\"main-content\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size-lg=\"6\" offset-lg=\"3\" size-sm=\"12\">\r\n        <h5 class=\"ion-text-center\">My Donation</h5>\r\n        <ion-card>\r\n          <form [formGroup]=\"donationForm\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Name</ion-label>\r\n                <ion-input formControlName=\"name\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Select food category</ion-label>\r\n                <ion-select formControlName=\"foodCategory\">\r\n                  <ion-select-option value=\"Grocery\">Grocery</ion-select-option>\r\n                  <ion-select-option value=\"Fruits\">Fruits</ion-select-option>\r\n                  <ion-select-option value=\"Beverages\">Beverages</ion-select-option>\r\n                  <ion-select-option value=\"Prepared food\">Prepared food</ion-select-option>\r\n                  <ion-select-option value=\"Other\">Other</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Food Title</ion-label>\r\n                <ion-input formControlName=\"title\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Address</ion-label>\r\n                <ion-textarea formControlName=\"address\"></ion-textarea>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Contact Number</ion-label>\r\n                <ion-textarea formControlName=\"contactno\"></ion-textarea>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Quantity</ion-label>\r\n                <ion-input formControlName=\"quantity\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Pickup Date</ion-label>\r\n                <ion-datetime value=\"\" formControlName=\"pickupDate\"></ion-datetime>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Pickup Start Time</ion-label>\r\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"\" formControlName=\"pickupStartTime\"></ion-datetime>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Pickup End Time</ion-label>\r\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"\" formControlName=\"pickupEndTime\"></ion-datetime>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"primary\">Additonal Information</ion-label>\r\n                <ion-textarea formControlName=\"additionalInfo\"></ion-textarea>\r\n              </ion-item>\r\n              <ion-item >\r\n                <!-- <ion-label color=\"primary\" slot=\"start\">Upload Photo(s)</ion-label> -->\r\n                <label for=\"upload-photo\" tabindex=\"1\" class=\"upload-photo\" >Upload photo<ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon></label>\r\n                <input type=\"file\" formControlName=\"photo\" hidden id=\"upload-photo\" (change)=\"onFileChange($event)\">\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-button type=\"reset\" size=\"small\" fill=\"outline\" slot=\"end\">Reset</ion-button>\r\n                <ion-button type=\"submit\"  size=\"small\" slot=\"end\" (click)=\"onSubmit()\" [disabled]=\"!donationForm.valid || isSubmitionInProgress\">\r\n                  Submit <ion-spinner name=\"lines\" *ngIf=\"isSubmitionInProgress\"></ion-spinner>\r\n                </ion-button>\r\n              </ion-item>\r\n            </ion-list>\r\n          </form>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_donor_donation-form_donation-form_module_ts.js.map
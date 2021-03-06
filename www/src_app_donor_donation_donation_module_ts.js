(self["webpackChunkfoodApp"] = self["webpackChunkfoodApp"] || []).push([["src_app_donor_donation_donation_module_ts"],{

/***/ 872:
/*!***********************************************************!*\
  !*** ./src/app/donor/donation/donation-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationPageRoutingModule": () => (/* binding */ DonationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _donation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation.page */ 5543);




const routes = [
    {
        path: '',
        component: _donation_page__WEBPACK_IMPORTED_MODULE_0__.DonationPage
    }
];
let DonationPageRoutingModule = class DonationPageRoutingModule {
};
DonationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DonationPageRoutingModule);



/***/ }),

/***/ 8577:
/*!***************************************************!*\
  !*** ./src/app/donor/donation/donation.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationPageModule": () => (/* binding */ DonationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _donation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-routing.module */ 872);
/* harmony import */ var _donation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation.page */ 5543);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);





let DonationPageModule = class DonationPageModule {
};
DonationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _donation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DonationPageRoutingModule
        ],
        declarations: [_donation_page__WEBPACK_IMPORTED_MODULE_1__.DonationPage]
    })
], DonationPageModule);



/***/ }),

/***/ 5543:
/*!*************************************************!*\
  !*** ./src/app/donor/donation/donation.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationPage": () => (/* binding */ DonationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_donation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./donation.page.html */ 4541);
/* harmony import */ var _donation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation.page.scss */ 541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core_services_donation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/donation.service */ 286);






let DonationPage = class DonationPage {
    constructor(route, donationService) {
        this.route = route;
        this.donationService = donationService;
        this.isDataFetching = false;
    }
    ngOnInit() {
        this.isDataFetching = true;
        this.route.params.subscribe(params => {
            this.donationService.getDonation(params.id).subscribe(response => {
                this.isDataFetching = false;
                this.donation = response.one_restaurant_data;
            });
        });
    }
};
DonationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _core_services_donation_service__WEBPACK_IMPORTED_MODULE_2__.DonationService }
];
DonationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-donation',
        template: _raw_loader_donation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_donation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DonationPage);



/***/ }),

/***/ 541:
/*!***************************************************!*\
  !*** ./src/app/donor/donation/donation.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-label span {\n  color: var(--button-bg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVCQUFBO0FBQUoiLCJmaWxlIjoiZG9uYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4541:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donation/donation.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content color=\"primary\" class=\"ion-no-padding\" id=\"main-content\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size-lg=\"6\" offset-lg=\"3\" size-sm=\"12\">\r\n        <ion-card >\r\n          <ion-img src=\"../../assets/fruits_veggies.jpg\" aria-labelledby=\"Image of donated item\"></ion-img>\r\n        </ion-card>\r\n        <ion-item class=\"loader-wrapper\" *ngIf=\"isDataFetching\">\r\n          <div>\r\n            <ion-spinner name=\"lines\" color=\"primary\"></ion-spinner>\r\n          </div>\r\n        </ion-item>\r\n        <ion-card>\r\n          <ion-card-content *ngIf=\"!isDataFetching\">\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"primary\" class=\"ion-no-margin\" tabindex=\"1\">\r\n                Title: <span>{{donation?.food_title}}</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"primary\" class=\"ion-no-margin\"  tabindex=\"1\">\r\n                Submitted On: <span>{{donation?.submission_date}}</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"primary\" class=\"ion-no-margin\"  tabindex=\"1\">\r\n                Category: <span>{{donation?.category}}</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"primary\" class=\"ion-no-margin\"  tabindex=\"1\">\r\n                Address: <span>{{donation?.donation_hours[0]?.address}}</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"primary\" class=\"ion-no-margin\"  tabindex=\"1\">\r\n                Pick Up Date: <span>{{donation?.donation_hours[0]?.date}}</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"primary\" class=\"ion-no-margin\"  tabindex=\"1\">\r\n                Pick Up Time: <span>{{donation?.donation_hours[0]?.pickuptime}}</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"primary\" class=\"ion-no-margin\"  tabindex=\"1\">\r\n                Quantity: <span>{{donation?.donation_hours[0]?.quantity}}</span>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_donor_donation_donation_module_ts.js.map
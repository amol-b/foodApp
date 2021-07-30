(self["webpackChunkfoodApp"] = self["webpackChunkfoodApp"] || []).push([["src_app_donor_donor-dashboard_donor-dashboard_module_ts"],{

/***/ 4510:
/*!*************************************************************************!*\
  !*** ./src/app/donor/donor-dashboard/donor-dashboard-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonorDashboardPageRoutingModule": () => (/* binding */ DonorDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _donor_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donor-dashboard.page */ 5984);




const routes = [
    {
        path: '',
        component: _donor_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DonorDashboardPage
    }
];
let DonorDashboardPageRoutingModule = class DonorDashboardPageRoutingModule {
};
DonorDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DonorDashboardPageRoutingModule);



/***/ }),

/***/ 309:
/*!*****************************************************************!*\
  !*** ./src/app/donor/donor-dashboard/donor-dashboard.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonorDashboardPageModule": () => (/* binding */ DonorDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _donor_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donor-dashboard-routing.module */ 4510);
/* harmony import */ var _donor_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donor-dashboard.page */ 5984);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);





let DonorDashboardPageModule = class DonorDashboardPageModule {
};
DonorDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _donor_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DonorDashboardPageRoutingModule
        ],
        declarations: [_donor_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DonorDashboardPage]
    })
], DonorDashboardPageModule);



/***/ }),

/***/ 5984:
/*!***************************************************************!*\
  !*** ./src/app/donor/donor-dashboard/donor-dashboard.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonorDashboardPage": () => (/* binding */ DonorDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_donor_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./donor-dashboard.page.html */ 5619);
/* harmony import */ var _donor_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donor-dashboard.page.scss */ 4092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/donationlist.service */ 8555);





let DonorDashboardPage = class DonorDashboardPage {
    constructor(donationListService) {
        this.donationListService = donationListService;
        this.isListFetching = false;
    }
    ngOnInit() {
        this.isListFetching = true;
        this.donationListService.getAllDonations().subscribe((response) => {
            this.donations = response.all_restaurant_data === 'NOTHING TO BE FOUND' ? undefined : response.all_restaurant_data;
            this.isListFetching = false;
        });
    }
};
DonorDashboardPage.ctorParameters = () => [
    { type: _core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__.DonationlistService }
];
DonorDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-donor-dashboard',
        template: _raw_loader_donor_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_donor_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DonorDashboardPage);



/***/ }),

/***/ 4092:
/*!*****************************************************************!*\
  !*** ./src/app/donor/donor-dashboard/donor-dashboard.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-avatar {\n  width: 100px !important;\n  height: 100px !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n  margin: 0 auto;\n}\n\nion-label p {\n  white-space: normal;\n}\n\n#my-donation .header {\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.top-section {\n  background: var(--button-bg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbm9yLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNFLDRCQUFBO0FBRkYiLCJmaWxlIjoiZG9ub3ItZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWF2YXRhciAge1xyXG4gIHdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0IDogMTAwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgcCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiNteS1kb25hdGlvbntcclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi50b3Atc2VjdGlvbntcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 5619:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-dashboard/donor-dashboard.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content color=\"primary\" class=\"ion-no-padding\" id=\"main-content\">\r\n  <ion-card class=\"ion-no-margin custom-border-radius\">\r\n    <ion-card-header tabindex=\"1\" aria-label=\"profile image\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar class=\"item-avatar\" >\r\n          <img src=\"../../assets/placeholder-user.png\">\r\n        </ion-avatar>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\">\r\n          <h4 tabindex=\"1\">Welcome Sree!!</h4>\r\n          <p tabindex=\"1\" *ngIf=\"donations\">You have provided {{donations?.length}} donations so far.</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div id=\"my-donation\">\r\n    <div class=\"ion-text-center header\" tabindex=\"2\" aria-label=\"my donation list\">My Donations</div>\r\n    <div class=\"ion-text-center header\" tabindex=\"2\" *ngIf=\"!donations && !isListFetching\" style=\"font-size: 10px;\">No Record Found!</div>\r\n    <ion-card color=\"primary\">\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-item *ngIf=\"isListFetching\" class=\"loader-wrapper\">\r\n          <div>\r\n            <ion-spinner name=\"lines\" color=\"primary\"></ion-spinner>\r\n          </div>\r\n        </ion-item>\r\n        <app-donationlist *ngFor=\"let donation of donations\" [donation]=\"donation\"></app-donationlist>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"light\" routerLink=\"/donation-form\" tabindex=\"3\">\r\n      <ion-icon name=\"add-outline\" ></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_donor_donor-dashboard_donor-dashboard_module_ts.js.map
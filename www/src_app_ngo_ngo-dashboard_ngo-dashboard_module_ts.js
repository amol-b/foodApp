(self["webpackChunkfoodApp"] = self["webpackChunkfoodApp"] || []).push([["src_app_ngo_ngo-dashboard_ngo-dashboard_module_ts"],{

/***/ 3329:
/*!*******************************************************************!*\
  !*** ./src/app/ngo/ngo-dashboard/ngo-dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgoDashboardPageRoutingModule": () => (/* binding */ NgoDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngo_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngo-dashboard.page */ 1968);




const routes = [
    {
        path: '',
        component: _ngo_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.NgoDashboardPage
    }
];
let NgoDashboardPageRoutingModule = class NgoDashboardPageRoutingModule {
};
NgoDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NgoDashboardPageRoutingModule);



/***/ }),

/***/ 3120:
/*!***********************************************************!*\
  !*** ./src/app/ngo/ngo-dashboard/ngo-dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgoDashboardPageModule": () => (/* binding */ NgoDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngo_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngo-dashboard-routing.module */ 3329);
/* harmony import */ var _ngo_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngo-dashboard.page */ 1968);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);





let NgoDashboardPageModule = class NgoDashboardPageModule {
};
NgoDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ngo_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.NgoDashboardPageRoutingModule
        ],
        declarations: [_ngo_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.NgoDashboardPage]
    })
], NgoDashboardPageModule);



/***/ }),

/***/ 1968:
/*!*********************************************************!*\
  !*** ./src/app/ngo/ngo-dashboard/ngo-dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgoDashboardPage": () => (/* binding */ NgoDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ngo_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ngo-dashboard.page.html */ 4534);
/* harmony import */ var _ngo_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngo-dashboard.page.scss */ 8533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/donationlist.service */ 8555);





let NgoDashboardPage = class NgoDashboardPage {
    constructor(donationListService) {
        this.donationListService = donationListService;
        this.isListFetching = false;
    }
    ngOnInit() {
        this.isListFetching = true;
        this.donationListService.getAllDonations().subscribe((response) => {
            this.donations = response.all_restaurant_data === 'NOTHING TO BE FOUND' ? undefined : response.all_restaurant_data;
            console.log(this.donations);
            this.isListFetching = false;
        });
    }
};
NgoDashboardPage.ctorParameters = () => [
    { type: src_app_core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__.DonationlistService }
];
NgoDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ngo-dashboard',
        template: _raw_loader_ngo_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ngo_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NgoDashboardPage);



/***/ }),

/***/ 8533:
/*!***********************************************************!*\
  !*** ./src/app/ngo/ngo-dashboard/ngo-dashboard.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-img {\n  height: 140px;\n}\n\n#donation-list {\n  margin-top: 10px;\n}\n\np {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nby1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0YiLCJmaWxlIjoibmdvLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW1nIHtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcbiNkb25hdGlvbi1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbnB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4534:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngo/ngo-dashboard/ngo-dashboard.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content color=\"primary\" class=\"ion-no-padding\" id=\"main-content\">\r\n  <ion-card class=\"ion-no-margin\">\r\n    <ion-card-header tabindex=\"1\" aria-label=\"profile image\" class=\"ion-no-padding\" >\r\n      <ion-item lines=\"none\">\r\n        <ion-img src=\"../../assets/acceptor.png\"></ion-img>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\">\r\n          <h4 tabindex=\"1\">Welcome NGO Partner!!</h4>\r\n          <p tabindex=\"1\">“There’s enough on this planet for everyone’s needs but not for everyone’s greed.” Mohandas Gandhi</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div id=\"donation-list\">\r\n    <div class=\"ion-text-center header\" tabindex=\"2\" aria-label=\"my donation list\">List of Donations</div>\r\n    <div class=\"ion-text-center header\" tabindex=\"2\" *ngIf=\"!donations && !isListFetching\" style=\"font-size: 10px;\">No Record Found!</div>\r\n    <ion-card color=\"primary\">\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-item *ngIf=\"isListFetching\" class=\"loader-wrapper\">\r\n          <div>\r\n            <ion-spinner name=\"lines\" color=\"primary\"></ion-spinner>\r\n          </div>\r\n        </ion-item>\r\n        <app-donationlist *ngFor=\"let donation of donations\" [donation]=\"donation\"></app-donationlist>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ngo_ngo-dashboard_ngo-dashboard_module_ts.js.map
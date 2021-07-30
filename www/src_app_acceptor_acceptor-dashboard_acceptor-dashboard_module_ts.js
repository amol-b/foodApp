(self["webpackChunkfoodApp"] = self["webpackChunkfoodApp"] || []).push([["src_app_acceptor_acceptor-dashboard_acceptor-dashboard_module_ts"],{

/***/ 4030:
/*!**********************************************************************************!*\
  !*** ./src/app/acceptor/acceptor-dashboard/acceptor-dashboard-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcceptorDashboardPageRoutingModule": () => (/* binding */ AcceptorDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _acceptor_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acceptor-dashboard.page */ 4210);




const routes = [
    {
        path: '',
        component: _acceptor_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.AcceptorDashboardPage
    }
];
let AcceptorDashboardPageRoutingModule = class AcceptorDashboardPageRoutingModule {
};
AcceptorDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcceptorDashboardPageRoutingModule);



/***/ }),

/***/ 2504:
/*!**************************************************************************!*\
  !*** ./src/app/acceptor/acceptor-dashboard/acceptor-dashboard.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcceptorDashboardPageModule": () => (/* binding */ AcceptorDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _acceptor_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acceptor-dashboard-routing.module */ 4030);
/* harmony import */ var _acceptor_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acceptor-dashboard.page */ 4210);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);





let AcceptorDashboardPageModule = class AcceptorDashboardPageModule {
};
AcceptorDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _acceptor_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcceptorDashboardPageRoutingModule
        ],
        declarations: [_acceptor_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.AcceptorDashboardPage]
    })
], AcceptorDashboardPageModule);



/***/ }),

/***/ 4210:
/*!************************************************************************!*\
  !*** ./src/app/acceptor/acceptor-dashboard/acceptor-dashboard.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcceptorDashboardPage": () => (/* binding */ AcceptorDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_acceptor_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./acceptor-dashboard.page.html */ 2216);
/* harmony import */ var _acceptor_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acceptor-dashboard.page.scss */ 4338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/donationlist.service */ 8555);





let AcceptorDashboardPage = class AcceptorDashboardPage {
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
AcceptorDashboardPage.ctorParameters = () => [
    { type: src_app_core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__.DonationlistService }
];
AcceptorDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-acceptor-dashboard',
        template: _raw_loader_acceptor_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_acceptor_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AcceptorDashboardPage);



/***/ }),

/***/ 4338:
/*!**************************************************************************!*\
  !*** ./src/app/acceptor/acceptor-dashboard/acceptor-dashboard.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-img {\n  height: 140px;\n}\n\n#donation-list {\n  margin-top: 10px;\n}\n\np {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2VwdG9yLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRiIsImZpbGUiOiJhY2NlcHRvci1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG4jZG9uYXRpb24tbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5we1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2216:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acceptor/acceptor-dashboard/acceptor-dashboard.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content color=\"primary\" class=\"ion-no-padding\" id=\"main-content\">\r\n  <ion-card class=\"ion-no-margin\">\r\n    <ion-card-header tabindex=\"1\" aria-label=\"profile image\" class=\"ion-no-padding\" >\r\n      <ion-item lines=\"none\">\r\n        <ion-img src=\"../../assets/acceptor.png\"></ion-img>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\">\r\n          <h4 tabindex=\"1\">Welcome Sree!!</h4>\r\n          <p tabindex=\"1\">“Hunger is not a problem. It is an obscenity. How wonderful it is that nobody need wait a single moment before starting to improve the world.” Anne Frank</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div id=\"donation-list\">\r\n    <div class=\"ion-text-center header\" tabindex=\"2\" aria-label=\"my donation list\">List of Donations</div>\r\n    <div class=\"ion-text-center header\" tabindex=\"2\" *ngIf=\"!donations && !isListFetching\" style=\"font-size: 10px;\">No Record Found!</div>\r\n    <ion-card color=\"primary\">\r\n      <ion-item *ngIf=\"isListFetching\" class=\"loader-wrapper\">\r\n        <div>\r\n          <ion-spinner name=\"lines\" color=\"primary\"></ion-spinner>\r\n        </div>\r\n      </ion-item>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <app-donationlist *ngFor=\"let donation of donations\" [donation]=\"donation\"></app-donationlist>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_acceptor_acceptor-dashboard_acceptor-dashboard_module_ts.js.map
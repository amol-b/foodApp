(self["webpackChunkfoodApp"] = self["webpackChunkfoodApp"] || []).push([["src_app_food-donor_food-donor_module_ts"],{

/***/ 8555:
/*!*******************************************************!*\
  !*** ./src/app/core/services/donationlist.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationlistService": () => (/* binding */ DonationlistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);



let DonationlistService = class DonationlistService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAllDonations() {
        const url = '/restaurants';
        return this.apiService.get(url);
    }
};
DonationlistService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
DonationlistService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DonationlistService);



/***/ }),

/***/ 9381:
/*!*********************************************************!*\
  !*** ./src/app/food-donor/food-donor-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodDonorPageRoutingModule": () => (/* binding */ FoodDonorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _food_donor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-donor.page */ 4943);




const routes = [
    {
        path: '',
        component: _food_donor_page__WEBPACK_IMPORTED_MODULE_0__.FoodDonorPage
    }
];
let FoodDonorPageRoutingModule = class FoodDonorPageRoutingModule {
};
FoodDonorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FoodDonorPageRoutingModule);



/***/ }),

/***/ 5292:
/*!*************************************************!*\
  !*** ./src/app/food-donor/food-donor.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodDonorPageModule": () => (/* binding */ FoodDonorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _food_donor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-donor-routing.module */ 9381);
/* harmony import */ var _food_donor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-donor.page */ 4943);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);





let FoodDonorPageModule = class FoodDonorPageModule {
};
FoodDonorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _food_donor_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodDonorPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_food_donor_page__WEBPACK_IMPORTED_MODULE_1__.FoodDonorPage]
    })
], FoodDonorPageModule);



/***/ }),

/***/ 4943:
/*!***********************************************!*\
  !*** ./src/app/food-donor/food-donor.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodDonorPage": () => (/* binding */ FoodDonorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_food_donor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./food-donor.page.html */ 8494);
/* harmony import */ var _food_donor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-donor.page.scss */ 9958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/donationlist.service */ 8555);





let FoodDonorPage = class FoodDonorPage {
    constructor(donationListService) {
        this.donationListService = donationListService;
        this.isListFetching = false;
    }
    ngOnInit() {
        this.isListFetching = true;
        this.donationListService.getAllDonations().subscribe((response) => {
            console.log(response);
            this.donations = response.all_restaurant_data;
            this.isListFetching = false;
        });
    }
};
FoodDonorPage.ctorParameters = () => [
    { type: _core_services_donationlist_service__WEBPACK_IMPORTED_MODULE_2__.DonationlistService }
];
FoodDonorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-food-donor',
        template: _raw_loader_food_donor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_donor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FoodDonorPage);



/***/ }),

/***/ 9958:
/*!*************************************************!*\
  !*** ./src/app/food-donor/food-donor.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-avatar {\n  width: 100px !important;\n  height: 100px !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n  margin: 0 auto;\n}\n\nion-label p {\n  white-space: normal;\n}\n\n#my-donation .header {\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.top-section {\n  background: var(--button-bg);\n}\n\n.loader-wrapper {\n  --background: transparent;\n}\n\n.loader-wrapper div {\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n}\n\n.loader-wrapper ion-spinner {\n  width: 60px;\n  height: 60px;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtZG9ub3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDRSw0QkFBQTtBQUZGOztBQVNBO0VBQ0UseUJBQUE7QUFORjs7QUFPRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxKIiwiZmlsZSI6ImZvb2QtZG9ub3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYXZhdGFyICB7XHJcbiAgd2lkdGg6MTAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQgOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBwIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuI215LWRvbmF0aW9ue1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuLnRvcC1zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZyk7XHJcbn1cclxuXHJcbi8vIGlvbi1jYXJkLCBpb24taXRlbXtcclxuLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 8494:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-donor/food-donor.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content color=\"primary\" class=\"ion-no-padding\" id=\"main-content\">\r\n  <ion-card class=\"ion-no-margin custom-border-radius\">\r\n    <ion-card-header tabindex=\"1\" aria-label=\"profile image\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar class=\"item-avatar\" >\r\n          <img src=\"../../assets/placeholder-user.png\">\r\n        </ion-avatar>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\">\r\n          <h4 tabindex=\"1\">Welcome Sree!!</h4>\r\n          <p tabindex=\"1\" *ngIf=\"donations\">You have provided {{donations?.length}} donations so far.</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div id=\"my-donation\">\r\n    <div class=\"ion-text-center header\" tabindex=\"2\" aria-label=\"my donation list\">My Donations</div>\r\n    <ion-card color=\"primary\">\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-item *ngIf=\"isListFetching\" class=\"loader-wrapper\">\r\n          <div>\r\n            <ion-spinner name=\"lines\" color=\"primary\"></ion-spinner>\r\n          </div>\r\n        </ion-item>\r\n        <app-donationlist *ngFor=\"let donation of donations\" [donation]=\"donation\"></app-donationlist>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"light\" routerLink=\"/donation-form\" tabindex=\"3\">\r\n      <ion-icon name=\"add-outline\" ></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_food-donor_food-donor_module_ts.js.map
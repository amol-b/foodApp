(self["webpackChunkfoodApp"] = self["webpackChunkfoodApp"] || []).push([["src_app_ngo-list_ngo-list_module_ts"],{

/***/ 409:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeWhile": () => (/* binding */ takeWhile)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 7393);

function takeWhile(predicate, inclusive = false) {
    return (source) => source.lift(new TakeWhileOperator(predicate, inclusive));
}
class TakeWhileOperator {
    constructor(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    call(subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    }
}
class TakeWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, predicate, inclusive) {
        super(destination);
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.index = 0;
    }
    _next(value) {
        const destination = this.destination;
        let result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    }
    nextOrComplete(value, predicateResult) {
        const destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            if (this.inclusive) {
                destination.next(value);
            }
            destination.complete();
        }
    }
}
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ 1793:
/*!*****************************************************!*\
  !*** ./src/app/ngo-list/ngo-list-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgoListPageRoutingModule": () => (/* binding */ NgoListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngo_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngo-list.page */ 491);




const routes = [
    {
        path: '',
        component: _ngo_list_page__WEBPACK_IMPORTED_MODULE_0__.NgoListPage
    }
];
let NgoListPageRoutingModule = class NgoListPageRoutingModule {
};
NgoListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NgoListPageRoutingModule);



/***/ }),

/***/ 6253:
/*!*********************************************!*\
  !*** ./src/app/ngo-list/ngo-list.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgoListPageModule": () => (/* binding */ NgoListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngo_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngo-list-routing.module */ 1793);
/* harmony import */ var _ngo_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngo-list.page */ 491);







let NgoListPageModule = class NgoListPageModule {
};
NgoListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngo_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NgoListPageRoutingModule
        ],
        declarations: [_ngo_list_page__WEBPACK_IMPORTED_MODULE_1__.NgoListPage]
    })
], NgoListPageModule);



/***/ }),

/***/ 491:
/*!*******************************************!*\
  !*** ./src/app/ngo-list/ngo-list.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgoListPage": () => (/* binding */ NgoListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ngo_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ngo-list.page.html */ 9282);
/* harmony import */ var _ngo_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngo-list.page.scss */ 6457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 409);
/* harmony import */ var _core_services_ngo_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/ngo-list.service */ 8894);






let NgoListPage = class NgoListPage {
    constructor(service) {
        this.service = service;
        this.ngolist = [];
        this.componentActive = true;
    }
    ngOnInit() {
        this.service.getNgoList().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.componentActive)).subscribe(data => {
            this.ngolist = data;
        });
    }
    ngOnDestroy() {
        this.componentActive = false;
    }
};
NgoListPage.ctorParameters = () => [
    { type: _core_services_ngo_list_service__WEBPACK_IMPORTED_MODULE_2__.NgoListService }
];
NgoListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ngo-list',
        template: _raw_loader_ngo_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ngo_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NgoListPage);



/***/ }),

/***/ 6457:
/*!*********************************************!*\
  !*** ./src/app/ngo-list/ngo-list.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ28tbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 9282:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngo-list/ngo-list.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>NGO List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item *ngFor=\"let item of ngolist\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.picture}}\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.company}}</h2>\n        <h3>{{item.noOfDeliveries}}</h3>\n        <p>{{item.about}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ngo-list_ngo-list_module_ts.js.map
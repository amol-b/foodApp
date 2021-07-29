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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngo_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngo-list-routing.module */ 1793);
/* harmony import */ var _ngo_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngo-list.page */ 491);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let NgoListPageModule = class NgoListPageModule {
};
NgoListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
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
        this.isListFetching = false;
    }
    ngOnInit() {
        this.isListFetching = true;
        this.service.getNgoList().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.componentActive)).subscribe(data => {
            this.ngolist = data;
            console.log(data);
            this.isListFetching = false;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#my-donation .header {\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.top-section {\n  background: var(--button-bg);\n}\n\n.loader-wrapper {\n  --background: transparent;\n}\n\n.loader-wrapper div {\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n}\n\n.loader-wrapper ion-spinner {\n  width: 60px;\n  height: 60px;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nby1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsNEJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJuZ28tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXktZG9uYXRpb257XHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvcC1zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZyk7XHJcbn1cclxuXHJcbi5sb2FkZXItd3JhcHBlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIGlvbi1zcGlubmVyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>NGO List</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content color=\"primary\" class=\"ion-no-padding\" id=\"main-content\">\n\n  <div id=\"my-donation\">\n    <div class=\"ion-text-center header\" tabindex=\"2\" aria-label=\"NGO List\">NGO List</div>\n    <ion-card color=\"primary\">\n      <ion-card-content class=\"ion-no-padding\">\n        <ion-item *ngIf=\"isListFetching\" class=\"loader-wrapper\">\n          <div>\n            <ion-spinner name=\"lines\" color=\"primary\"></ion-spinner>\n          </div>\n        </ion-item>\n        <ion-list>\n          <ion-item *ngFor=\"let item of ngolist\" detail>\n          <ion-thumbnail slot=\"start\" class=\"item-image\" tabindex=\"3\" aria-label=\"image of food item\">\n            <ion-img src=\"../../assets/ngo.jpg\"></ion-img>\n          </ion-thumbnail>\n          <ion-label color=\"primary\">\n            <h2 tabindex=\"3\">Name: <span>{{item.ngoName}}</span></h2>\n            <p tabindex=\"3\">Number of Deliveries: <span>{{item.noOfDeliveries}}</span></p>\n            <p tabindex=\"3\">About: <span>{{item.about}}</span></p>\n          </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ngo-list_ngo-list_module_ts.js.map
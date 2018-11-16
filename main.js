(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-books/all-books.component.css":
/*!***************************************************!*\
  !*** ./src/app/all-books/all-books.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-books/all-books.component.html":
/*!****************************************************!*\
  !*** ./src/app/all-books/all-books.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--page to display all books-->\n<div class=\"container\" id=\"contents\">\n  <div class=\"row\">\n    <div class=\"col mb-2\">\n      <img src="\assets\images\gotbackgrounds" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"allBooks.length > 0\">\n    <!--if data exists-->\n    <div *ngFor=\"let book of allBooks\" class=\"col\">\n      <div class=\"card border-warning mb-3 text-center\" style=\"width: 18rem;\">\n        <div class=\"card-header\">Book</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\" *ngIf=\"book.name; else noName\">{{book.name}}</h5>\n          <ng-template #noName>\n            <h5 class=\"card-title\">Anonymous</h5>\n          </ng-template>\n          <p class=\"card-text\"></p>\n        </div>\n        <p class=\"list-group-item\" *ngIf=\"book.publisher; else noPublisher\">Publisher: {{book.publisher}}</p>\n        <ng-template #noPublisher>\n          <p class=\"list-group-item\">Publisher: Unknown</p>\n        </ng-template>\n\n        <p class=\"list-group-item\" *ngIf=\"book.authors && book.authors.length >= 1; else noAuthors\">Authors: <span *ngFor=\"let author of book.authors;let first=first;let last=last\">{{author}}{{last\n            ? '':', '}}\n          </span></p>\n        <ng-template #noAuthors>\n          <p class=\"list-group-item\">Authors: Unknown</p>\n        </ng-template>\n        <a href=\"#\" class=\"btn btn-warning\" [routerLink]=\"['/books',book.url]\">Details</a>\n      </div>\n\n    </div>\n    <!--End of col div and ngFor loop-->\n  </div>\n  <!--End of row and ngIf block-->\n</div>\n<!--End of container - #contents-->"

/***/ }),

/***/ "./src/app/all-books/all-books.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-books/all-books.component.ts ***!
  \**************************************************/
/*! exports provided: AllBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBooksComponent", function() { return AllBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gotdata.service */ "./src/app/gotdata.service.ts");
//all-books component
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllBooksComponent = /** @class */ (function () {
    //declaring http service instance in the constructor
    function AllBooksComponent(gotDataService) {
        this.gotDataService = gotDataService;
    }
    AllBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allBooks = this.gotDataService.getAllBooks().subscribe(//converting observable into data
        function (//converting observable into data
        data) {
            _this.allBooks = data;
            console.log(_this.allBooks);
            _this.allBooks = _this.gotDataService.getSortData(_this.allBooks); //sorting 
            console.log(_this.allBooks);
        }, function (error) {
            console.log("some error occurred");
            _this.gotDataService.handleError(error);
        });
        console.log(this.allBooks);
    };
    AllBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-books',
            template: __webpack_require__(/*! ./all-books.component.html */ "./src/app/all-books/all-books.component.html"),
            styles: [__webpack_require__(/*! ./all-books.component.css */ "./src/app/all-books/all-books.component.css")]
        }),
        __metadata("design:paramtypes", [_gotdata_service__WEBPACK_IMPORTED_MODULE_1__["GotdataService"]])
    ], AllBooksComponent);
    return AllBooksComponent;
}());



/***/ }),

/***/ "./src/app/all-characters/all-characters.component.css":
/*!*************************************************************!*\
  !*** ./src/app/all-characters/all-characters.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-characters/all-characters.component.html":
/*!**************************************************************!*\
  !*** ./src/app/all-characters/all-characters.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--page to display all characters-->\n<div class=\"container\" id=\"contents\">\n  <div class=\"row\">\n    <div class=\"col mb-2\">\n      <img src="\assets\images\gotbackgrounds.jpg" height=\"100%\" width=\"100%\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"allCharacters.length > 0\">\n    <!--if data exists-->\n    <div *ngFor=\"let character of allCharacters\" class=\"col\">\n      <div class=\"card border-primary mb-3 text-center\" style=\"width: 18rem;\">\n        <div class=\"card-header\">Character</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\" *ngIf=\"character.name; else noName\">{{character.name}}</h5>\n          <ng-template #noName>\n            <h5 class=\"card-title\">Anonymous</h5>\n          </ng-template>\n          <p class=\"card-text\"></p>\n        </div>\n        <p class=\"list-group-item\" *ngIf=\"character.gender; else noGender\">Gender: {{character.gender}}</p>\n        <ng-template #noGender>\n          <p class=\"list-group-item\">Gender: Unknown</p>\n        </ng-template>\n        <p class=\"list-group-item\" *ngIf=\"character.culture; else noCulture\">Culture: {{character.culture}}</p>\n        <ng-template #noCulture>\n          <p class=\"list-group-item\">Culture: Unknown</p>\n        </ng-template>\n        <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/characters',character.url]\">Details</a>\n      </div>\n\n    </div>\n    <!--End of col div and ngFor loop-->\n  </div>\n  <!--End of row and ngIf block-->\n</div>\n<!--End of container - #contents-->"

/***/ }),

/***/ "./src/app/all-characters/all-characters.component.ts":
/*!************************************************************!*\
  !*** ./src/app/all-characters/all-characters.component.ts ***!
  \************************************************************/
/*! exports provided: AllCharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCharactersComponent", function() { return AllCharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gotdata.service */ "./src/app/gotdata.service.ts");
//all-characters component
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllCharactersComponent = /** @class */ (function () {
    function AllCharactersComponent(gotdataservice) {
        this.gotdataservice = gotdataservice;
    }
    AllCharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Character Component OnInit Called");
        this.allCharacters = this.gotdataservice.getAllCharacters().subscribe(//converting observable into data
        function (//converting observable into data
        data) {
            console.log("logging data");
            _this.allCharacters = data;
            console.log(_this.allCharacters);
            _this.allCharacters = _this.gotdataservice.getSortData(_this.allCharacters); //sorting 
            console.log(_this.allCharacters);
        }, function (error) {
            console.log("some error occurred");
            _this.gotdataservice.handleError(error);
        });
        console.log(this.allCharacters);
    };
    AllCharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-characters',
            template: __webpack_require__(/*! ./all-characters.component.html */ "./src/app/all-characters/all-characters.component.html"),
            styles: [__webpack_require__(/*! ./all-characters.component.css */ "./src/app/all-characters/all-characters.component.css")]
        }),
        __metadata("design:paramtypes", [_gotdata_service__WEBPACK_IMPORTED_MODULE_1__["GotdataService"]])
    ], AllCharactersComponent);
    return AllCharactersComponent;
}());



/***/ }),

/***/ "./src/app/all-houses/all-houses.component.css":
/*!*****************************************************!*\
  !*** ./src/app/all-houses/all-houses.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-houses/all-houses.component.html":
/*!******************************************************!*\
  !*** ./src/app/all-houses/all-houses.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--page to display all houses-->\n<div class=\"container\" id=\"contents\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <img src="\assets\images\gotbackgrounds" height=\"100%\" width=\"100%\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"allHouses.length > 0\">\n    <!--if data exists-->\n    <div *ngFor=\"let house of allHouses\" class=\"col\">\n      <div class=\"card border-success mb-3 text-center\" style=\"width: 18rem;\">\n        <div class=\"card-header\">House</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\" *ngIf=\"house.name; else noName\">{{house.name}}</h5>\n          <ng-template #noName>\n            <h5 class=\"card-title\">Anonymous</h5>\n          </ng-template>\n          <p class=\"card-text\"></p>\n        </div>\n        <p class=\"list-group-item\" *ngIf=\"house.region; else noRegion\">Region: {{house.region}}</p>\n        <ng-template #noRegion>\n          <p class=\"list-group-item\">Region: Unknown</p>\n        </ng-template>\n\n        <p class=\"list-group-item\" *ngIf=\"house.words; else noWords\">Words: {{house.words}}</p>\n        <ng-template #noWords>\n          <p class=\"list-group-item\">Words: Unknown</p>\n        </ng-template>\n        <a href=\"#\" class=\"btn btn-success\" [routerLink]=\"['/houses',house.url]\">Details</a>\n      </div>\n\n    </div>\n    <!--End of col div and ngFor loop-->\n  </div>\n  <!--End of row and ngIf block-->\n</div>\n<!--End of container - #contents-->"

/***/ }),

/***/ "./src/app/all-houses/all-houses.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-houses/all-houses.component.ts ***!
  \****************************************************/
/*! exports provided: AllHousesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllHousesComponent", function() { return AllHousesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gotdata.service */ "./src/app/gotdata.service.ts");
//all-houses component
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllHousesComponent = /** @class */ (function () {
    function AllHousesComponent(gotDataService) {
        this.gotDataService = gotDataService;
    }
    AllHousesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("House Component OnInit Called");
        this.allHouses = this.gotDataService.getAllHouses().subscribe(//converting observable into data
        function (//converting observable into data
        data) {
            console.log("logging data");
            _this.allHouses = data;
            console.log(_this.allHouses);
            _this.allHouses = _this.gotDataService.getSortData(_this.allHouses); //sorting 
            console.log(_this.allHouses);
        }, function (error) {
            console.log("some error occurred");
            _this.gotDataService.handleError(error);
        });
        console.log(this.allHouses);
    };
    AllHousesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-houses',
            template: __webpack_require__(/*! ./all-houses.component.html */ "./src/app/all-houses/all-houses.component.html"),
            styles: [__webpack_require__(/*! ./all-houses.component.css */ "./src/app/all-houses/all-houses.component.css")]
        }),
        __metadata("design:paramtypes", [_gotdata_service__WEBPACK_IMPORTED_MODULE_1__["GotdataService"]])
    ], AllHousesComponent);
    return AllHousesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The shell page-->\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\" style=\"background-color: #343A40;\">\n    <a class=\"navbar-brand\" href=\"#\">Game Of Thrones</a>\n\n    <!--Navbar toggler-->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n\n        <li class=\"nav-item dropdown dropright\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Choose...\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/books']\">Books</a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/characters']\">Characters</a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/houses']\">Houses</a>\n          </div>\n        </li>\n\n      </ul>\n\n    </div>\n  </nav>\n  <br /><br/><br />\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'game-of-thrones';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./house/house.component */ "./src/app/house/house.component.ts");
/* harmony import */ var _got_home_got_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./got-home/got-home.component */ "./src/app/got-home/got-home.component.ts");
/* harmony import */ var _all_books_all_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./all-books/all-books.component */ "./src/app/all-books/all-books.component.ts");
/* harmony import */ var _all_characters_all_characters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-characters/all-characters.component */ "./src/app/all-characters/all-characters.component.ts");
/* harmony import */ var _all_houses_all_houses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-houses/all-houses.component */ "./src/app/all-houses/all-houses.component.ts");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gotdata.service */ "./src/app/gotdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _character_character_component__WEBPACK_IMPORTED_MODULE_7__["CharacterComponent"],
                _house_house_component__WEBPACK_IMPORTED_MODULE_8__["HouseComponent"],
                _got_home_got_home_component__WEBPACK_IMPORTED_MODULE_9__["GotHomeComponent"],
                _all_books_all_books_component__WEBPACK_IMPORTED_MODULE_10__["AllBooksComponent"],
                _all_characters_all_characters_component__WEBPACK_IMPORTED_MODULE_11__["AllCharactersComponent"],
                _all_houses_all_houses_component__WEBPACK_IMPORTED_MODULE_12__["AllHousesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'home', component: _got_home_got_home_component__WEBPACK_IMPORTED_MODULE_9__["GotHomeComponent"] },
                    { path: 'books', component: _all_books_all_books_component__WEBPACK_IMPORTED_MODULE_10__["AllBooksComponent"] },
                    { path: 'characters', component: _all_characters_all_characters_component__WEBPACK_IMPORTED_MODULE_11__["AllCharactersComponent"] },
                    { path: 'houses', component: _all_houses_all_houses_component__WEBPACK_IMPORTED_MODULE_12__["AllHousesComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'books/:ID', component: _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"] },
                    { path: 'characters/:ID', component: _character_character_component__WEBPACK_IMPORTED_MODULE_7__["CharacterComponent"] },
                    { path: 'houses/:ID', component: _house_house_component__WEBPACK_IMPORTED_MODULE_8__["HouseComponent"] },
                    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"] }
                ])
            ],
            providers: [_gotdata_service__WEBPACK_IMPORTED_MODULE_13__["GotdataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*book component css file*/\r\n\r\n.bookClass{\r\n    background-color: #343A40;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page to display information about a specific book -->\n\n<div class=\"container bookClass\">\n  <div class=\"row\" *ngIf=\"book\">\n    <div class=\"col-1 mt-4\">\n      <a class=\"btn btn-warning\" (click)=goBackToPreviousPage()>Go Back</a>\n    </div>\n    <div class=\"col-11\">\n      \n      <h1 class=\"display-3 text-center\" *ngIf=\"book.name; else noName\">Book-{{book.name}}</h1>\n      <ng-template #noName>\n        <h1 class=\"display-3 text-center\">Anonymous</h1>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"book\">\n    <div class=\"col\">\n      <table class=\"table table-borderless\">\n        <tbody *ngIf=\"book\">\n          <tr class=\"bg-warning\">\n            <th scope=\"row\">ISBN</th>\n            <td *ngIf=\"book.isbn; else noISBN\">{{book.isbn}}</td>\n            <ng-template #noISBN>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">Authors</th>\n            <td *ngIf=\"book.authors && book.authors.length > 1; else noAuthors\">\n              <span *ngFor=\"let author of book.authors;let first=first;let last=last\">{{author}}{{last ? '':', '}}\n              </span>\n            </td>\n            <ng-template #noAuthors>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-warning\">\n            <th scope=\"row\">Number of pages</th>\n            <td *ngIf=\"book.numberOfPages; else nonumberOfPages\">\n              {{book.numberOfPages}}\n            </td>\n            <ng-template #nonumberOfPages>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">publisher</th>\n            <td *ngIf=\"book.publisher; else noPublisher\">\n              {{book.publisher}}\n            </td>\n            <ng-template #noPublisher>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-warning\">\n            <th scope=\"row\">Country</th>\n            <td *ngIf=\"book.country; else noCountry\">\n              {{book.country}}\n            </td>\n            <ng-template #noCountry>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">Media Type</th>\n            <td *ngIf=\"book.mediaType; else noMediaType\">\n              {{book.mediaType}}\n            </td>\n            <ng-template #noMediaType>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-warning\">\n            <th scope=\"row\">Released</th>\n            <td *ngIf=\"book.released; else noReleased\">\n              {{book.released | date}}\n            </td>\n            <ng-template #noReleased>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gotdata.service */ "./src/app/gotdata.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
//book component
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing router related code



var BookComponent = /** @class */ (function () {
    function BookComponent(activatedroute, router, gotservice, location) {
        this.activatedroute = activatedroute;
        this.router = router;
        this.gotservice = gotservice;
        this.location = location;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the character ID from the router
        var url = this.activatedroute.snapshot.paramMap.get('ID');
        console.log(url);
        var bookId = url.replace(/^\D+/g, ''); // replace all leading non-digits with nothing
        console.log(bookId);
        this.gotservice.getBookInformation(bookId).subscribe(function (data) {
            console.log(data);
            _this.book = data;
        }, function (error) {
            console.log("Some error occured");
            console.log(error.errorMessage);
        });
    };
    BookComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _gotdata_service__WEBPACK_IMPORTED_MODULE_2__["GotdataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/character/character.component.css":
/*!***************************************************!*\
  !*** ./src/app/character/character.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* character component */\r\n\r\n.heading{\r\n    background-color: #ececec;\r\n    width:100%;\r\n}\r\n\r\n.table{\r\n    margin:auto;\r\n}\r\n\r\nth{\r\n    text-align:center;    \r\n}\r\n\r\n.characterClass{\r\n    background-color: #343A40;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/character/character.component.html":
/*!****************************************************!*\
  !*** ./src/app/character/character.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--page to display information about the specific book -->\n<div class=\"container characterClass\">\n  <div class=\"row\" *ngIf=\"character\">    \n    <div class=\"col-1 mt-4\">\n      <a class=\"btn btn-primary\" (click)=goBackToPreviousPage()>Go Back</a>\n    </div>\n    <div class=\"col-11\">\n      <h1 class=\"display-3 text-center\" *ngIf=\"character.name; else noName\"> {{character.name}}</h1>\n      <ng-template #noName>\n        <h1 class=\"display-3 text-center\">Anonymous</h1>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"character\">\n    <div class=\"col\">\n      <table class=\"table table-borderless\">\n        <tbody *ngIf=\"character\">\n          <tr class=\"bg-primary\">\n            <th scope=\"row\">Gender</th>\n            <td *ngIf=\"character.gender; else noGender\">{{character.gender}}</td>\n            <ng-template #noGender>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">Culture</th>\n            <td *ngIf=\"character.culture; else noCulture\">{{character.culture}}</td>\n            <ng-template #noCulture>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-primary\">\n            <th scope=\"row\">Born</th>\n            <td *ngIf=\"character.born; else noBorn\">{{character.born}}</td>\n            <ng-template #noBorn>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">Died</th>\n            <td *ngIf=\"character.died; else noDied\">{{character.died}}</td>\n            <ng-template #noDied>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-primary\">\n            <th scope=\"row\">Titles</th>\n            <td *ngIf=\"character.titles && character.titles.length > 1; else noTitles\">\n              <span *ngFor=\"let title of character.titles;let first=first;let last=last\">{{title}}{{last ? '':', '}}\n              </span>\n            </td>\n            <ng-template #noTitles>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">Aliases</th>\n            <td *ngIf=\"character.aliases && character.aliases.length > 1; else noAliases\">\n              <span *ngFor=\"let alias of character.aliases;let first=first;let last=last\">{{alias}}{{last ? '':', '}}</span>\n            </td>\n            <ng-template #noAliases>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-primary\">\n            <th scope=\"row\">Father</th>\n            <td *ngIf=\"character.father; else noFather\">{{character.father}}</td>\n            <ng-template #noFather>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">Mother</th>\n            <td *ngIf=\"character.mother; else noMother\">{{character.mother}}</td>\n            <ng-template #noMother>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-primary\">\n            <th scope=\"row\">TV Series</th>\n            <td *ngIf=\"character.tvSeries.length !=undefined && character.tvSeries.length > 1; else noTvSeries\"><span *ngFor=\"let series of character.tvSeries;let first=first;let last=last\">{{series}}{{last\n                ? '':', '}}</span></td>\n            <ng-template #noTvSeries>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"\">\n            <th scope=\"row\">Played By</th>\n            <td *ngIf=\"character.playedBy.length !=undefined && character.playedBy.length > 1; else noPlayedBy\"><span *ngFor=\"let playedby of character.playedby;let first=first;let last=last\">{{playedby}}{{last\n                    ? '':', '}}</span></td>\n            <ng-template #noPlayedBy>\n              <td>N/A</td>\n            </ng-template>\n          </tr>          \n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/character/character.component.ts":
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gotdata.service */ "./src/app/gotdata.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing router related code



var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(activatedroute, router, gotservice, location) {
        this.activatedroute = activatedroute;
        this.router = router;
        this.gotservice = gotservice;
        this.location = location;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the character ID from the router
        var url = this.activatedroute.snapshot.paramMap.get('ID');
        console.log(url);
        var characterId = url.replace(/^\D+/g, ''); // replace all leading non-digits with nothing
        console.log(characterId);
        this.gotservice.getCharacterInformation(characterId).subscribe(function (data) {
            console.log(data);
            _this.character = data;
        }, function (error) {
            console.log("Some error occured");
            console.log(error.errorMessage);
        });
    };
    CharacterComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character',
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/character/character.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _gotdata_service__WEBPACK_IMPORTED_MODULE_2__["GotdataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./src/app/got-home/got-home.component.css":
/*!*************************************************!*\
  !*** ./src/app/got-home/got-home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/got-home/got-home.component.html":
/*!**************************************************!*\
  !*** ./src/app/got-home/got-home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- home page all game-of-thrones, displaying all contents books, characters and houses -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <img src=\assets\images\gotbackgrounds.jpg" class=\"img-fluid\" alt=\"Game of thrones\">\n    </div>\n  </div>\n  <br />\n  <div class=\"row\" *ngIf=\"alldata.length > 0\">\n    <div *ngFor=\"let data of alldata\" class=\"col\">\n      <div *ngIf=\"data.url.includes('characters')\">\t\t<!-- if url contains the word 'characters' this div will be rendered  -->\n        <div class=\"card border-primary mb-3 text-center\" style=\"width: 18rem;\">\n          <div class=\"card-header\">Character</div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" *ngIf=\"data.name; else noName\">{{data.name}}</h5>\n            <ng-template #noName>\n              <h5 class=\"card-title\">Anonymous</h5>\n            </ng-template>\n            <p class=\"card-text\"></p>\n          </div>\n          <p class=\"list-group-item\" *ngIf=\"data.gender; else noGender\">Gender: {{data.gender}}</p>\n          <ng-template #noGender>\n            <p class=\"list-group-item\">Gender: Unknown</p>\n          </ng-template>\n          <p class=\"list-group-item\" *ngIf=\"data.culture; else noCulture\">Culture: {{data.culture}}</p>\n          <ng-template #noCulture>\n            <p class=\"list-group-item\">Culture: Unknown\n            </p>\n          </ng-template>\n          <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/characters',data.url]\">Details</a>\n        </div>\n      </div>\n      <div *ngIf=\"data.url.includes('books')\"> <!-- if url contains the word 'books' this div will be rendered  -->\n        <div class=\"card border-warning mb-3 text-center\" style=\"width: 18rem;\">\n          <div class=\"card-header\">Book</div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" *ngIf=\"data.name; else noName\">{{data.name}}</h5>\n            <ng-template #noName>\n              <h5 class=\"card-title\">Anonymous</h5>\n            </ng-template>\n            <p class=\"card-text\"></p>\n          </div>\n\n          <p class=\"list-group-item\" *ngIf=\"data.publisher; else noPublisher\">Publisher: {{data.publisher}}</p>\n          <ng-template #noPublisher>\n            <p class=\"list-group-item\">Publisher: Unknown</p>\n          </ng-template>\n\n          <p class=\"list-group-item\" *ngIf=\"data.authors && data.authors.length >= 1; else noAuthors\">Authors: <span *ngFor=\"let author of data.authors;let first=first;let last=last\">{{author}}{{last\n              ? '':', '}}\n            </span></p>\n          <ng-template #noAuthors>\n            <p class=\"list-group-item\">Authors: Unknown</p>\n          </ng-template>\n\n\n          <a href=\"#\" class=\"btn btn-warning\" [routerLink]=\"['/books',data.url]\">Details</a>\n        </div>\n      </div>\n      <div *ngIf=\"data.url.includes('houses')\"> <!-- if url contains the word 'houses' this div will be rendered  -->\n        <div class=\"card border-success mb-3 text-center\" style=\"width: 18rem;\">\n          <div class=\"card-header\">House</div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" *ngIf=\"data.name; else noName\">{{data.name}}</h5>\n\n            <ng-template #noName>\n              <h5 class=\"card-title\">Anonymous</h5>\n            </ng-template>\n            <p class=\"card-text\"></p>\n          </div>\n          <p class=\"list-group-item\" *ngIf=\"data.region; else noRegion\">Region: {{data.region}}</p>\n          <ng-template #noRegion>\n            <p class=\"list-group-item\">Region: Unknown</p>\n          </ng-template>\n\n          <p class=\"list-group-item\" *ngIf=\"data.words; else noWords\">Words: {{data.words}}</p>\n          <ng-template #noWords>\n            <p class=\"list-group-item\">Words: Unknown</p>\n          </ng-template>\n          <a href=\"#\" class=\"btn btn-success\" [routerLink]=\"['/houses',data.url]\">Details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/got-home/got-home.component.ts":
/*!************************************************!*\
  !*** ./src/app/got-home/got-home.component.ts ***!
  \************************************************/
/*! exports provided: GotHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotHomeComponent", function() { return GotHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gotdata.service */ "./src/app/gotdata.service.ts");
//got-home component
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GotHomeComponent = /** @class */ (function () {
    function GotHomeComponent(gotservice) {
        this.gotservice = gotservice;
        this.alldata = [];
    }
    GotHomeComponent.prototype.ngOnInit = function () {
        /* On initializing, all characters, books and houses will be requested through the service
        using observables */
        var _this = this;
        this.gotservice.getAllCharacters().subscribe(function (data) {
            console.log(data);
            _this.allcharacters = data;
            console.log(data.name);
            _this.alldata = _this.alldata.concat(_this.allcharacters);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        this.gotservice.getAllBooks().subscribe(function (data) {
            console.log(data);
            _this.allbooks = data;
            _this.alldata = _this.alldata.concat(_this.allbooks);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        this.gotservice.getAllHouses().subscribe(function (data) {
            console.log(data);
            _this.allhouses = data;
            _this.alldata = _this.alldata.concat(data);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    GotHomeComponent.prototype.ngDoCheck = function () {
        /* since observables are asynchronous; ngDoCheck() will check for any updates and accordingly updates 'alldata' and using the compare() it will display all the data in the alphabetical order */
        function compare(a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        }
        this.alldata = this.alldata.sort(compare);
    };
    GotHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-got-home',
            template: __webpack_require__(/*! ./got-home.component.html */ "./src/app/got-home/got-home.component.html"),
            styles: [__webpack_require__(/*! ./got-home.component.css */ "./src/app/got-home/got-home.component.css")]
        }),
        __metadata("design:paramtypes", [_gotdata_service__WEBPACK_IMPORTED_MODULE_1__["GotdataService"]])
    ], GotHomeComponent);
    return GotHomeComponent;
}());



/***/ }),

/***/ "./src/app/gotdata.service.ts":
/*!************************************!*\
  !*** ./src/app/gotdata.service.ts ***!
  \************************************/
/*! exports provided: GotdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotdataService", function() { return GotdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* 'gotdata' HTTP service */



var GotdataService = /** @class */ (function () {
    function GotdataService(httpclient) {
        this.httpclient = httpclient;
        this.baseUrl = "https://anapioficeandfire.com/api";
    }
    GotdataService.prototype.handleError = function (err) {
        console.log("Handling the error in http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    //method to get 50 characters
    GotdataService.prototype.getAllCharacters = function () {
        var myResponse = this.httpclient.get(this.baseUrl + '/characters' + '?pageSize=50');
        console.log(myResponse);
        return myResponse;
    };
    //method to get 50 books
    GotdataService.prototype.getAllBooks = function () {
        var myResponse = this.httpclient.get(this.baseUrl + '/books' + '?pageSize=50');
        console.log(myResponse);
        return myResponse;
    };
    //method to get 50 houses
    GotdataService.prototype.getAllHouses = function () {
        var myResponse = this.httpclient.get(this.baseUrl + '/houses' + '?pageSize=50');
        console.log(myResponse);
        return myResponse;
    };
    //method to get single character information
    GotdataService.prototype.getCharacterInformation = function (characterId) {
        var myResponse = this.httpclient.get(this.baseUrl + '/characters/' + characterId);
        return myResponse;
    };
    //method to get single book information
    GotdataService.prototype.getBookInformation = function (bookId) {
        var myResponse = this.httpclient.get(this.baseUrl + '/books/' + bookId);
        return myResponse;
    };
    //method to get single house information
    GotdataService.prototype.getHouseInformation = function (houseId) {
        var myResponse = this.httpclient.get(this.baseUrl + '/houses/' + houseId);
        return myResponse;
    };
    //sorting the data
    GotdataService.prototype.getSortData = function (rawData) {
        rawData.sort(function (name1, name2) {
            if (name1.name < name2.name) {
                return -1;
            }
            else if (name1.name > name2.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return rawData;
    };
    GotdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GotdataService);
    return GotdataService;
}()); // 'gotdata' HTTP service ends here



/***/ }),

/***/ "./src/app/house/house.component.css":
/*!*******************************************!*\
  !*** ./src/app/house/house.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*houseClass css*/\r\n\r\n.houseClass{\r\n    background-color: #343A40;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/house/house.component.html":
/*!********************************************!*\
  !*** ./src/app/house/house.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page to display a particular house information -->\n<div class=\"container houseClass\">\n  \n  <div class=\"row\" *ngIf=\"house\">\n    <div class=\"col-1 mt-4\">\n      <a class=\"btn btn-success\" (click)=goBackToPreviousPage()>Go Back</a>\n    </div>\n    <div class=\"col-11\">\n      <h1 class=\"display-3 text-center\" *ngIf=\"house.name; else noName\">{{house.name}}</h1>\n      <ng-template #noName>\n        <h1 class=\"display-3 text-center\">House-Anonymous</h1>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"house\">\n    <div class=\"col\">\n      <table class=\"table table-borderless\">\n        <tbody *ngIf=\"house\">\n          <tr>\n            <th scope=\"row\">Region</th>\n            <td *ngIf=\"house.region; else noRegion\">{{house.region}}</td>\n            <ng-template #noRegion>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-success\">\n            <th scope=\"row\">Coat of Arms</th>\n            <td *ngIf=\"house.coatOfArms; else noCoatOfArms\">{{house.coatOfArms}}</td>\n            <ng-template #noCoatOfArms>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr>\n            <th scope=\"row\">Words</th>\n            <td *ngIf=\"house.words; else noWords\">{{house.words}}</td>\n            <ng-template #noWords>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-success\">\n            <th scope=\"row\">Titles</th>\n            <td *ngIf=\"house.titles && house.titles.length > 1; else noTitles\">\n              <span *ngFor=\"let title of house.titles;let first=first;let last=last\">{{title}}{{last ? '':', '}}\n              </span>\n            </td>\n            <ng-template #noTitles>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr>\n            <th scope=\"row\">Seats</th>\n            <td *ngIf=\"house.seats && house.seats.length > 1; else noSeats\">\n              <span *ngFor=\"let seat of house.seats;let first=first;let last=last\">{{seat}}{{last ? '':', '}}\n              </span>\n            </td>\n            <ng-template #noSeats>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-success\">\n            <th scope=\"row\">Heir</th>\n            <td *ngIf=\"house.heir; else noHeir\">{{house.heir}}</td>\n            <ng-template #noHeir>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n         \n          <tr>\n            <th scope=\"row\">Founded</th>\n            <td *ngIf=\"house.founded; else noFounded\">{{house.founded}}</td>\n            <ng-template #noFounded>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-success\">\n            <th scope=\"row\">Founder</th>\n            <td *ngIf=\"house.founder; else noFounder\">{{house.founder}}</td>\n            <ng-template #noFounder>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr>\n            <th scope=\"row\">Died Out</th>\n            <td *ngIf=\"house.diedOut; else noDiedOut\">{{house.diedOut}}</td>\n            <ng-template #noDiedOut>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n          <tr class=\"bg-success\">\n            <th scope=\"row\">Ancestral Weapons</th>\n            <td *ngIf=\"house.ancestralWeapons && house.ancestralWeapons.length > 1; else noAncestralWeapon\">\n              <span *ngFor=\"let ancestralWeapon of house.ancestralWeapons;let first=first;let last=last\">{{ancestralWeapon}}{{last ? '':', '}}\n              </span>\n            </td>\n            <ng-template #noAncestralWeapon>\n              <td>N/A</td>\n            </ng-template>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/house/house.component.ts":
/*!******************************************!*\
  !*** ./src/app/house/house.component.ts ***!
  \******************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gotdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gotdata.service */ "./src/app/gotdata.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing router related code



var HouseComponent = /** @class */ (function () {
    function HouseComponent(activatedroute, router, gotservice, location) {
        this.activatedroute = activatedroute;
        this.router = router;
        this.gotservice = gotservice;
        this.location = location;
    }
    HouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the character ID from the router
        var url = this.activatedroute.snapshot.paramMap.get('ID');
        console.log(url);
        var houseId = url.replace(/^\D+/g, ''); // replace all leading non-digits with nothing
        console.log(houseId);
        this.gotservice.getHouseInformation(houseId).subscribe(function (data) {
            console.log(data);
            _this.house = data;
        }, function (error) {
            console.log("Some error occured");
            console.log(error.errorMessage);
        });
    };
    HouseComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    HouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house',
            template: __webpack_require__(/*! ./house.component.html */ "./src/app/house/house.component.html"),
            styles: [__webpack_require__(/*! ./house.component.css */ "./src/app/house/house.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _gotdata_service__WEBPACK_IMPORTED_MODULE_2__["GotdataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 'Not found' component -->\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <img src=\"/src/404.png\" class=\"img-fluid rounded mx-auto d-block\" width=\"100%\" height=\"70%\" alt=\"Page not Found!!!\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\Edwisor\game-of-thrones\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
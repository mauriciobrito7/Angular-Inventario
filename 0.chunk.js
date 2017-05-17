webpackJsonp([0,6],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculadora_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_calculator_price_pipe__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_calculator_earn_pipe__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraModule", function() { return CalculadoraModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__calculadora_component__["a" /* CalculadoraComponent */]
    }
];
var CalculadoraModule = (function () {
    function CalculadoraModule() {
    }
    return CalculadoraModule;
}());
CalculadoraModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__calculadora_component__["a" /* CalculadoraComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_calculator_price_pipe__["a" /* CalculatorPricePipe */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_calculator_earn_pipe__["a" /* CalculatorEarnPipe */]
        ]
    })
], CalculadoraModule);

//# sourceMappingURL=calculadora.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculadoraComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculadoraComponent = (function () {
    function CalculadoraComponent() {
        this.precioDolares = 64;
        this.precioDolarToday = 5000;
        this.prime = 3;
        this.porcentaje = 30;
        this.envio = 20000;
    }
    CalculadoraComponent.prototype.ngOnInit = function () {
    };
    return CalculadoraComponent;
}());
CalculadoraComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-calculadora',
        template: __webpack_require__(202),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [])
], CalculadoraComponent);

//# sourceMappingURL=calculadora.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorEarnPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalculatorEarnPipe = (function () {
    function CalculatorEarnPipe() {
    }
    CalculatorEarnPipe.prototype.transform = function (value, args) {
        var precioDolares = parseFloat(value);
        var precioDolarToday = args[0];
        var prime = args[1];
        var porcentaje = 0.01 * args[2];
        var envio = args[3];
        var precioTotal = (precioDolarToday * (precioDolares + prime)) + 20000;
        precioTotal = (precioTotal * porcentaje);
        return (isNaN(precioTotal) || precioDolares == 0 ? 0 : precioTotal);
    };
    return CalculatorEarnPipe;
}());
CalculatorEarnPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
        name: 'calculatorEarn'
    })
], CalculatorEarnPipe);

//# sourceMappingURL=calculator-earn.pipe.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPricePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalculatorPricePipe = (function () {
    function CalculatorPricePipe() {
    }
    CalculatorPricePipe.prototype.transform = function (value, args) {
        var precioDolares = parseFloat(value);
        var precioDolarToday = args[0];
        var prime = args[1];
        var porcentaje = 0.01 * args[2];
        var envio = args[3];
        var precioTotal = (precioDolarToday * (precioDolares + prime)) + 20000;
        precioTotal = (precioTotal * porcentaje) + precioTotal;
        return (isNaN(precioTotal) || precioDolares == 0 ? 0 : precioTotal);
    };
    return CalculatorPricePipe;
}());
CalculatorPricePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
        name: 'calculatorPrice'
    })
], CalculatorPricePipe);

//# sourceMappingURL=calculator-price.pipe.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Fugaz+One);", ""]);

// module
exports.push([module.i, "@font-face {\n  font-family: Jaapokki;\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/../fonts/Jaapokkisubtract-Regular.otf\"); }\n\n@font-face {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/../fonts/Montserrat-Regular.ttf\"); }\n\n.title {\n  display: block;\n  text-align: center;\n  margin: 1em 0 !important; }\n  .title span {\n    border-bottom: 2px solid #2b5876; }\n\n.main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.form {\n  margin: 0 auto !important;\n  max-width: 480px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  .form-group {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 1em;\n    background: #191919; }\n  .form label, .form input {\n    margin: 0.7em auto !important;\n    width: 65%;\n    font-family: \"Montserrat\";\n    font-size: 1em; }\n  .form label {\n    text-align: center;\n    color: #ffffff;\n    height: 1em; }\n  .form input {\n    border-width: 0px;\n    border-bottom-width: 1px;\n    padding: 0.5em; }\n  .form input:focus {\n    outline-color: #4e4376; }\n  .form-answer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: linear-gradient(to right, #2b5876, #4e4376);\n    color: #ffffff;\n    padding: 0.5em;\n    font-family: \"Montserrat\";\n    width: 100%;\n    border: 0;\n    margin: 0 auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"title\">\n    <span>Calculadora</span>\n</h3>\n<main class=\"main\">\n    <div class=\"form\">\n      <div class=\"form-group\">\n        <label for=\"precioDolares\">Precio en dolares $:</label>\n        <input  id=\"precioDolares\" [(ngModel)]=\"precioDolares\">\n        <label for=\"precioDolarToday\">Precio DolarToday en Bsf:</label>\n        <input  id=\"precioDolarToday\" [(ngModel)]=\"precioDolarToday\">\n        <label for=\"prime\">Costo de prime:</label>\n        <input  id=\"prime\" [(ngModel)]=\"prime\">\n        <label for=\"porcentaje\">Porcentaje de ganancia:</label>\n        <input  id=\"porcentaje\" [(ngModel)]=\"porcentaje\">\n        <label for=\"envio\">Costo de envio en Bsf:</label>\n        <input  id=\"envio\" [(ngModel)]=\"envio\">\n      </div>\n      \n      <div class=\"form-answer\">\n        <span>precio de venta: {{precioDolares | calculatorPrice: [precioDolarToday, prime, porcentaje, envio]}}</span> <span>ganancia : {{precioDolares | calculatorEarn: [precioDolarToday, prime, porcentaje, envio]}}</span>\n      </div>\n    </div>\n</main>\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map
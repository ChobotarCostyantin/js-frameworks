"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(series, model, year, vin) {
        this.series = series;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }
    Car.prototype.getVin = function () {
        return this.vin;
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(series, model, year, vin, color) {
        var _this = _super.call(this, series, model, year, vin) || this;
        _this.color = color;
        return _this;
    }
    Toyota.prototype.display = function () {
        console.log("Car series: ".concat(this.series, ", model: ").concat(this.model, ", year: ").concat(this.year, ", vin: ").concat(this.getVin(), ", color: ").concat(this.color));
    };
    return Toyota;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(series, model, year, vin, isMSeries) {
        var _this = _super.call(this, series, model, year, vin) || this;
        _this.isMSeries = isMSeries;
        return _this;
    }
    BMW.prototype.display = function () {
        console.log("Car series: ".concat(this.series, ", model: ").concat(this.model, ", year: ").concat(this.year, ", vin: ").concat(this.getVin(), ", isMSeries: ").concat(this.isMSeries));
    };
    return BMW;
}(Car));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(series, model, year, vin, fuelType) {
        var _this = _super.call(this, series, model, year, vin) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    Mercedes.prototype.display = function () {
        console.log("Car series: ".concat(this.series, ", model: ").concat(this.model, ", year: ").concat(this.year, ", vin: ").concat(this.getVin(), ", fuelType: ").concat(this.fuelType));
    };
    return Mercedes;
}(Car));
var toyotaCorolla = new Toyota('Corolla', 'Verso', 2020, '123456789', 'blue');
var toyotaCamry = new Toyota('Camry', 'XLE', 2021, '987654321', 'red');
var bmwX5 = new BMW('X5', 'G05', 2022, '111111111', true);
var bmw3Series = new BMW('3 Series', 'G20', 2023, '222222222', false);
var mercedesEClass = new Mercedes('E-Class', 'W212', 2024, '333333333', 'diesel');
var mercedesCClass = new Mercedes('C-Class', 'W204', 2025, '444444444', 'gasoline');
toyotaCorolla.display();
toyotaCamry.display();
bmwX5.display();
bmw3Series.display();
mercedesEClass.display();
mercedesCClass.display();

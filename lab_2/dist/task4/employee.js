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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(_a) {
        var name = _a.name, age = _a.age, salary = _a.salary;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
exports.Employee = Employee;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary) {
        return _super.call(this, { name: name, age: age, salary: salary }) || this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    Manager.prototype.pay = function () {
        console.log("Manager ".concat(this.name, " is paid ").concat(this.salary));
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        return _super.call(this, { name: name, age: age, salary: salary }) || this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    Developer.prototype.pay = function () {
        console.log("Developer ".concat(this.name, " is paid ").concat(this.salary));
    };
    return Developer;
}(Employee));
exports.Developer = Developer;

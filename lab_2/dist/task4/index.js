"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var employees = [
    new employee_1.Developer('Misha', 28, 50000),
    new employee_1.Developer('Oleg', 32, 55000),
    new employee_1.Manager('Valera', 40, 70000),
    new employee_1.Manager('Slave', 45, 75000)
];
var totalAnnualBonus = employees.reduce(function (acc, employee) { return acc + employee.getAnnualBonus(); }, 0);
console.log("Total annual bonus of each employee: ".concat(totalAnnualBonus));
employees.forEach(function (employee) { if (employee instanceof employee_1.Developer || employee instanceof employee_1.Manager) {
    employee.pay();
} });

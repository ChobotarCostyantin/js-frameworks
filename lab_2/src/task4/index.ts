import { Employee, Developer, Manager } from "./employee";

const employees: Employee[] = [
    new Developer('Misha', 28, 50000),
    new Developer('Oleg', 32, 55000),
    new Manager('Valera', 40, 70000),
    new Manager('Slave', 45, 75000)
];

const totalAnnualBonus = employees.reduce((acc, employee) => acc + employee.getAnnualBonus(), 0);

console.log(`Total annual bonus of each employee: ${totalAnnualBonus}`);

employees.forEach(employee => { if (employee instanceof Developer || employee instanceof Manager) { employee.pay(); }});
  
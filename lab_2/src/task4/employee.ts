import { Payable } from "./payable";

export abstract class Employee {
    name: string;
    age: number;
    salary: number;
    constructor({name, age, salary}: {name: string, age: number, salary: number}) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    abstract getAnnualBonus(): number;
}

export class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super({name, age, salary});
    }

    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void {
        console.log(`Manager ${this.name} is paid ${this.salary}`);
    }
}

export class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super({name, age, salary});
    }
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }
    pay(): void {
        console.log(`Developer ${this.name} is paid ${this.salary}`);
    }
}
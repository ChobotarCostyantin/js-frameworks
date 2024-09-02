interface Animal {
    name: string;
    age: number;
    weight: number;
    walk?(): void;
    fly?(): void;
    swim?(): void;
}
class Cat implements Animal {
    name: string;
    age: number;
    weight: number;
    constructor({name, age, weight}: {name: string, age: number, weight: number}) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
class Bird implements Animal {
    name: string;
    age: number;
    weight: number;
    constructor({name, age, weight}: {name: string, age: number, weight: number}) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    fly() {
        console.log(`${this.name} is flying`);
    }
}
class Fish implements Animal {
    name: string;
    age: number;
    weight: number;
    constructor({name, age, weight}: {name: string, age: number, weight: number}) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    swim() {
        console.log(`${this.name} is swimming`);    
    }
}

const gato = new Cat({name: 'Gato', age: 5, weight: 5});
gato.walk();
const borb = new Bird({name: 'Borb', age: 1, weight: 0.2});
borb.fly();
const feesh = new Fish({name: 'Feesh', age: 2, weight: 0.1});
feesh.swim();
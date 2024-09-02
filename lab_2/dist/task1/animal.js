"use strict";
var Cat = /** @class */ (function () {
    function Cat(_a) {
        var name = _a.name, age = _a.age, weight = _a.weight;
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    Cat.prototype.walk = function () {
        console.log("".concat(this.name, " is walking"));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(_a) {
        var name = _a.name, age = _a.age, weight = _a.weight;
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " is flying"));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(_a) {
        var name = _a.name, age = _a.age, weight = _a.weight;
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " is swimming"));
    };
    return Fish;
}());
var gato = new Cat({ name: 'Gato', age: 5, weight: 5 });
gato.walk();
var borb = new Bird({ name: 'Borb', age: 1, weight: 0.2 });
borb.fly();
var feesh = new Fish({ name: 'Feesh', age: 2, weight: 0.1 });
feesh.swim();

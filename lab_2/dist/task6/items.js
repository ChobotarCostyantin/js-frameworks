"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = exports.Magazine = exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, numberOfPages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
    }
    Book.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("Book ".concat(this.title, " is borrowed"));
        }
        else {
            console.log("Book ".concat(this.title, " is already borrowed"));
        }
    };
    return Book;
}());
exports.Book = Book;
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    Magazine.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("Magazine ".concat(this.title, " is borrowed"));
        }
        else {
            console.log("Magazine ".concat(this.title, " is already borrowed"));
        }
    };
    return Magazine;
}());
exports.Magazine = Magazine;
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    DVD.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("DVD ".concat(this.title, " is borrowed"));
        }
        else {
            console.log("DVD ".concat(this.title, " is already borrowed"));
        }
    };
    return DVD;
}());
exports.DVD = DVD;

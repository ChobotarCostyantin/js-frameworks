"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_1 = require("./items");
var library_1 = require("./library");
var book = new items_1.Book('War and Peace', 'Leo Tolstoy', 1225);
var magazine = new items_1.Magazine('New York Times', 'John Doe', 10);
var dvd = new items_1.DVD('Star Wars', 'George Lucas', 120);
var library = new library_1.Library();
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);
var foundItem = library.findItemByTitle('War and Peace');
if (foundItem) {
    console.log("Found item: ".concat(foundItem.title));
}
else {
    console.log('Item not found');
}
book.borrow();
book.borrow();
library.displayAvailableItems();

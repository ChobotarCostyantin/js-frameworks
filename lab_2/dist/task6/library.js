"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("Item ".concat(item.title, " added successfully"));
    };
    Library.prototype.findItemByTitle = function (title) {
        return this.items.find(function (item) { return item.title === title; });
    };
    Library.prototype.displayAvailableItems = function () {
        console.log("Available items:");
        var items = this.items.filter(function (item) { return !item.isBorrowed; });
        console.table(items);
    };
    return Library;
}());
exports.Library = Library;

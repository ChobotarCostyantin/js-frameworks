import { Book, DVD, Magazine } from "./items";
import { Library } from './library';

const book = new Book('War and Peace', 'Leo Tolstoy', 1225);
const magazine = new Magazine('New York Times', 'John Doe', 10);
const dvd = new DVD('Star Wars', 'George Lucas', 120);
const library = new Library();

library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

const foundItem = library.findItemByTitle('War and Peace');
if (foundItem) {
    console.log(`Found item: ${foundItem.title}`);
} else {
    console.log('Item not found');
}
book.borrow();
book.borrow();
library.displayAvailableItems();
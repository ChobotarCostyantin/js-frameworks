import { LibraryItem } from "./libraryItem";

export class Library {
    private items: LibraryItem[] = [];
    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Item ${item.title} added successfully`);
    }
    findItemByTitle(title: string): LibraryItem | undefined {
        return this.items.find(item => item.title === title);
    }
    displayAvailableItems(): void {
        console.log(`Available items:`);
        var items = this.items.filter(item => !item.isBorrowed);
        console.table(items);
    }
}
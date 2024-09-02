import { LibraryItem } from "./libraryItem";

export class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    numberOfPages: number;
    constructor(title: string, author: string, numberOfPages: number) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Book ${this.title} is borrowed`);
        } else {
            console.log(`Book ${this.title} is already borrowed`);
        }
    }
}

export class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    issueNumber: number;
    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Magazine ${this.title} is borrowed`);
        } else {
            console.log(`Magazine ${this.title} is already borrowed`);
        }
    }
}

export class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    duration: number;
    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD ${this.title} is borrowed`);
        } else {
            console.log(`DVD ${this.title} is already borrowed`);
        }
    }
}
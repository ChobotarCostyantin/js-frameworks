export interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow: () => void;
}
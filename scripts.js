let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    console.log(`${this.name} written by ${this.author}, ${this.pages} pages, ${this.read}`);
}


function addBookToLibrary(name, author, pages, read) {
    myLibrary.push(new Book(name, author, pages, read));
}

function bookLister() {

}

let testBook = new Book('test', 'tester', 6969, 'not read');
myLibrary.push(testBook);

let testBook2 = new Book('test2', 'tester', 6969, 'not read');
myLibrary.push(testBook);

let testBook3 = new Book('test3', 'tester', 6969, 'not read');
myLibrary.push(testBook);
// testBook.info();

// console.log(myLibrary.length)
// console.log(myLibrary[0])
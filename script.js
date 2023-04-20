/** @format */

let myLibrary = [];

function Book(title, author, numberOfPages, hasRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.hasRead = hasRead;
  this.info = function () {
    return `${title} by ${author}, ${numberOfPages} pages, ${
      hasRead ? "has read" : "has not read"
    }.`;
  };
}

function addsBookToLibrary(book) {
  myLibrary.push(book);
}

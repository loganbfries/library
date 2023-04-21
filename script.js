/** @format */

let myLibrary = [];

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

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

/** @format */

const cardContainer = document.querySelector(".card-container");
const form = document.querySelector(".form-container");
const formTitle = document.getElementById("title");

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

function displayBookCard(book) {
  const card = document.createElement("div");
  card.classList = "card-body";

  const content = `
  <div class='card'>
    <div class='card-info'>
      <h4>${book.title}</h4>
      <p>By: ${book.author}</p>
      <p>Pages: ${book.numberOfPages}</p>
    </div>
    <div class='buttons'>
      <button class='btn-update'>Update</button>
      <button class='btn-del'>Delete</button>
    </div>
  </div>
  `;

  cardContainer.innerHTML += content;
}

function displayLibrary(library) {
  library.forEach((item) => displayBookCard(item));
}

function getFormData() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pageNumber = document.getElementById("pageNumber").value;
  var hasRead = document.getElementById("hasRead").checked;

  const newBook = new Book(title, author, pageNumber, hasRead);
  console.log(newBook);
  addsBookToLibrary(newBook);
  console.log(myLibrary);
  displayBookCard(newBook);
  closeForm();
  form.reset();
}

const Hobbit = new Book("Hobbit", "J.R.R. Tolkein", 400, true);
addsBookToLibrary(Hobbit);

const Rust = new Book(
  "The Rust Programming Language",
  "Steve Klabnik",
  600,
  false
);
addsBookToLibrary(Rust);

const ISLR = new Book(
  "An Introduction to Statistical Learning",
  "James, Witten, Hastie, Tibshirani",
  900,
  false
);
addsBookToLibrary(ISLR);

displayLibrary(myLibrary);

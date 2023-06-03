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

// displayBookCard and resetLibrary are redundant but idk how to compact them.
function displayBookCard(book) {
  const card = document.createElement("div");
  card.classList = "card-body";

  const content = `
  <div class='card' data-num = ${myLibrary.length}>
    <div class='card-info'>
      <h4>"${book.title}"</h4>
      <p>By: ${book.author}</p>
      <p>Pages: ${book.numberOfPages}</p>
      <button class = 'read-btn'>Read: ${book.hasRead}</button>
    </div>
    <div class='buttons'>
      <button class='btn-update'>Update</button>
      <button class='btn-del' data-num = ${myLibrary.length}>Delete</button>
    </div>
  </div>
  `;

  cardContainer.innerHTML += content;
}

function resetLibrary(book, index) {
  const card = document.createElement("div");
  card.classList = "card-body";

  const content = `
  <div class='card' data-num = ${index + 1}>
    <div class='card-info'>
      <h4>"${book.title}"</h4>
      <p>By: ${book.author}</p>
      <p>Pages: ${book.numberOfPages}</p>
      <button class = 'read-btn'>Read: ${book.hasRead}</button>
    </div>
    <div class='buttons'>
      <button class='btn-update'>Update</button>
      <button class='btn-del' data-num = ${index + 1}>Delete</button>
    </div>
  </div>
  `;

  cardContainer.innerHTML += content;
}

// For displaying the initial library.
function displayLibrary(library) {
  library.forEach((item, index) => resetLibrary(item, index));
  removeBooks();
  enableReadBtn();
  update();
}

// For displaying any new entries.
function updateLibrary(book) {
  addsBookToLibrary(book);
  displayBookCard(book);
}

// Clears the entire displayed library.
function clearLibrary(element) {
  element.innerHTML = "";
}

function resetForm() {
  closeForm();
  form.reset();
}

function getFormData() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pageNumber = document.getElementById("pageNumber").value;
  var hasRead = document.getElementById("hasRead").checked;

  const newBook = new Book(title, author, pageNumber, hasRead);

  updateLibrary(newBook);

  // Remove books function allows us to continually press remove on the different cards.
  removeBooks();
  enableReadBtn();
  update();

  resetForm();
}

// Test books.
const Hobbit = new Book("Hobbit", "J.R.R. Tolkein", 400, true);
updateLibrary(Hobbit);

const Rust = new Book(
  "The Rust Programming Language",
  "Steve Klabnik",
  600,
  false
);
updateLibrary(Rust);

const ISLR = new Book(
  "An Introduction to Statistical Learning",
  "James, Witten, Hastie, Tibshirani",
  900,
  false
);
updateLibrary(ISLR);

// Why do I have to make these functions every time?
const removeBooks = function () {
  const removeBookBtns = document.querySelectorAll(".btn-del");
  removeBookBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      index = btn.getAttribute("data-num");
      myLibrary.splice(index - 1, 1);
      console.log(myLibrary);
      clearLibrary(cardContainer);
      displayLibrary(myLibrary);
    });
  });
};

const update = function () {
  document.querySelectorAll(".btn-update").forEach((el) => {
    el.addEventListener("click", function (e) {
      let parentElement = e.target.parentElement;
      console.log(parentElement.parentElement);
    });
  });
};

const enableReadBtn = function () {
  document.querySelectorAll(".read-btn").forEach((el) => {
    el.addEventListener("click", function () {
      console.log(el.innerHTML);
      if (el.innerHTML.includes("true")) {
        console.log("this book has been read");
      }
    });
  });
};

removeBooks();
enableReadBtn();
// Update functionality works, but I haven't added a form to actually update the text. Need to implement this later.
update();

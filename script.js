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

function displayBookCard(book) {
  const card = document.createElement("div");
  card.classList = "card-body";

  const content = `
    <div class = 'card'> 
      <h4>${book.title}</h4>
      <p>By: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
    </div>
  `;
}

// // function addNewBook()

// const Hobbit = new Book("Hobbit", "J.R.R. Tolkein", 400, true);
// addsBookToLibrary(Hobbit);

// const Rust = new Book(
//   "The Rust Programming Language",
//   "Steve Klabnik",
//   600,
//   false
// );
// addsBookToLibrary(Rust);

// console.log(myLibrary);
// console.log(typeof myLibrary);

// myLibrary.forEach((item) => console.log(item.title));

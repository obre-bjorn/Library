let myLibrary = []

function Book(title, author, pages, cover = "", read = false) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.read = read;

}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


function displayBooks(library) {
    let bookContainer = document.querySelector('#bookContainer');

    library.map((book) => {
        let bookSec = document.createElement('div');
        for (const key in book) {
            let p = document.createElement('p');
            p.textContent = book[key]
            bookSec.appendChild(p)
        }

        bookContainer.appendChild(bookSec)
    })
    console.log(bookContainer);

}

const Book1 = new Book('Way of Men', 'Andrew Kibe', 350, true);
const Book2 = new Book('This is Africa', 'Abel Mutua', 280);
const Book3 = new Book('Rich Dad Poor Dad', 'Rick Kwoloski', 250);
addBookToLibrary(Book1)
addBookToLibrary(Book2)
addBookToLibrary(Book3)
    // displayBooks(myLibrary)
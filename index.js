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
        bookContainer.innerHTML += `
            <div class="bookCard w-96  bg-green-400 rounded-xl p-10 text-center shadow-xl">
                <p class="bookTitle text-xl font-bold">${book.title}</p>
                <p class="author text-md font-light">By: ${book.author}</p>
                <p class="page">Pages: ${book.pages}</p>
                <p class="read">Read: ${book.read}</p>
            </div>
        `
    })
    console.log(bookContainer);

}

const Book1 = new Book('Way of Men', 'Andrew Kibe', 350, true);
const Book2 = new Book('This is Africa', 'Abel Mutua', 280);
const Book3 = new Book('Rich Dad Poor Dad', 'Rick Kwoloski', 250);
addBookToLibrary(Book1)
addBookToLibrary(Book2)
addBookToLibrary(Book3)
displayBooks(myLibrary)
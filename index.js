let myLibrary = []
let deleteBooksBtn = [...document.querySelectorAll('.deleteBook')];
let addBookBtn = document.querySelector('.addBook');
let modal = document.querySelector('.modal');


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

let addBookForm = document.querySelector('#addBookForm');


addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)

})

//  SHOW MODAL

addBookBtn.addEventListener('click', () => {
    modal.classList.add('flex')
    modal.classList.remove('hidden');
})

// MODAL  FUNCTIONALITY
let formContainer = document.querySelector('.addbookFormContainer')

formContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

modal.addEventListener('click', (e) => {

    modal.classList.remove('flex');
    modal.classList.add('hidden')

})


function displayBooks(library) {
    let bookContainer = document.querySelector('#bookContainer');

    library.map((book, index) => {
            bookContainer.innerHTML += `
           <div class="bookCard w-96  bg-green-400 rounded-xl p-10 text-center shadow-xl flex flex-col items-center gap-5 ">
                <button class=" deleteBook bg-red-700 text-white px-2 py-0.5 self-end rounded-md hover:bg-red-500 border-none">X</button>
                <p class="bookTitle text-xl font-bold">Rich Dad Poor Dad</p>
                <img class="mx-auto mt-5 w-1/2 " src="https://afrireadsbooks.com/wp-content/uploads/2021/05/61M1eEsuSML.jpg" alt="Way of maen">
                <p class="author text-md font-light">By: Jack Donovan</p>
                <p class="page">Pages: 250</p>
                <p class="read">Read: True</p>
            </div>
        `
        })
        // console.log(bookContainer);

}
// deleteBooksBtn.forEach((btn) => {
//     btn.addEventListener('click', function(e) {
//         let bookContainer = document.
//         console.log(this.parentNode)
//         console.log(e.target.parentNode)
//     })
// })

// console.log(deleteBooksBtn);
const Book1 = new Book('Way of Men', 'Andrew Kibe', 350, true);
const Book2 = new Book('This is Africa', 'Abel Mutua', 280);
const Book3 = new Book('Rich Dad Poor Dad', 'Rick Kwoloski', 250);
addBookToLibrary(Book1)
addBookToLibrary(Book2)
addBookToLibrary(Book3)
displayBooks(myLibrary)
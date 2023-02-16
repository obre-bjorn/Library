let myLibrary = []
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


//  ADD BOOK BUTTON

let addBookForm = document.querySelector('#addBookForm');


addBookForm.addEventListener('submit', addBook)



// MODAL TOGGLER

function toggleModal() {
    modal.classList.toggle('flex');
    modal.classList.toggle('hidden')
    return
}


//  SHOW MODAL

addBookBtn.addEventListener('click', () => {
    toggleModal()
})

// MODAL  

let formContainer = document.querySelector('.addbookFormContainer')

formContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

modal.addEventListener('click', (e) => {

    toggleModal()

})





// ADD BOOK TO DOM

function addBook(e) {

    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const book = new Book(formProps['book-title'], formProps['book-author'], formProps['book-pages'], formProps['book-cover']);
    myLibrary.push(book);


    let libraryIndex = myLibrary.length - 1

    console.log(libraryIndex)
    addBookForm.reset();



    toggleModal()



    let bookContainer = document.querySelector('#bookContainer');


    bookContainer.insertAdjacentHTML("afterbegin", `
           <div class="bookCard w-80 bg-green-300 rounded-xl p-10 text-center shadow-xl flex flex-col items-center gap-5 transition-all hover:scale-105">
                <button id ="remove-book-${libraryIndex}" class="deleteBook bg-red-700 text-white px-2 py-0.5 self-end rounded-2xl hover:bg-red-600 border-none shadow-3xl hover:scale-125 hover:rotate-90 transition-all delay-150">X</button>
                <img class="mx-auto mt-2 w-32  rounded-xl hover:rounded-none transition-all delay-200 " src="${book.cover}"
                    alt="${book.title}">
                <p class="bookTitle text-2xl font-extrabold text-purple-800">${book.title}</p>
                <p class="author text-md font-light ">By: ${book.author}</p>
                <p class="page ">Pages: ${book.pages}</p>
                <p class="read ">Read: ${book.read}</p>
                </div>
                `)

    document.querySelector('#remove-book-' + libraryIndex)
        .addEventListener('click', function() {
            let parent = this.parentNode.parentNode
            let child = this.parentNode
            console.log(this)

            parent.removeChild(child)
        });

    // console.log(bookContainer);
}

// DELETE BOOK FROM LIBRARY & DOM
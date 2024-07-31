//Initialize book library
const myLibrary = [
    {
        cover: 'https://m.media-amazon.com/images/I/71xH0ALI4-L._SL1500_.jpg',
        title: 'Ikigai',
        author: 'Héctor García',
        pages: '208',
        status: false
    },
    {
        cover: 'https://m.media-amazon.com/images/I/81YkqyaFVEL._SL1500_.jpg',
        title: 'Atomic Habits',
        author: 'James Clear',
        pages: '320',
        status: false
    },
    {
        cover: 'https://m.media-amazon.com/images/I/41U4GrATFdL.jpg',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        pages: '209',
        status: false
    },
];

//Object constructor for book object
function Book(cover, title, author, pages, status) {
    this.cover = cover || 'https://libreture.com/static/images/book-placeholder.png';
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//Selecting book-container
const booksContainer = document.querySelector(".books-container");

//function to display books from MyLibrary array
function displayBooks() {
    booksContainer.innerHTML = ''; // Clear existing books
    myLibrary.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const bookInfo = document.createElement("div");
        bookInfo.classList.add("book-info");

        const bookCover = document.createElement("img");
        bookCover.classList.add("cover");
        bookCover.setAttribute("src", book.cover);
        bookCover.setAttribute("style", "width:100px ; height:150px ; align-items:center")

        const bookTitle = document.createElement("p");
        bookTitle.classList.add("title");
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("author");
        bookAuthor.textContent = `By ${book.author}`;

        const bookPages = document.createElement("p");
        bookPages.classList.add("pages");
        bookPages.textContent = `${book.pages} Pages`;

        const bookStatus = document.createElement("p");
        bookStatus.classList.add("status");
        bookStatus.textContent = book.status ? 'Completed' : 'Reading';

        bookDiv.appendChild(bookCover);
        bookDiv.appendChild(bookTitle);
        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);
        bookInfo.appendChild(bookStatus);
        bookDiv.appendChild(bookInfo);
        booksContainer.appendChild(bookDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks();

    const addBtn = document.getElementById("add-book");
    const dialog = document.querySelector("dialog");
    const hideBtn = document.querySelector("#cancel-btn");
    const formData = document.querySelector("form");

    formData.addEventListener("submit", (event) => {
        event.preventDefault();

        const coverSrc = formData.elements['cover-src'].value;
        const title = formData.elements['title'].value;
        const author = formData.elements['author'].value;
        const pages = formData.elements['pages'].value;
        const status = formData.elements['status']?.value === 'complete';

        const book = new Book(coverSrc, title, author, pages, status);
        myLibrary.push(book);
        displayBooks(); // Refresh the book list
        dialog.close();
    });

    addBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    hideBtn.addEventListener("click", () => {
        dialog.close();
    });
}); 
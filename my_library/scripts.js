let myLibrary = [];

const bookTitle = document.getElementById('btitle');
const bookAuthor = document.getElementById('bauthor');
const pageQty = document.getElementById('page-qty');
const bookRead = document.querySelector('input[name="read-book"]:checked');
const submitBook = document.getElementById('submit-book');

const inputFields = Array.from(document.querySelectorAll('input'));
const bookContainer = document.getElementById('book-list');
let deleteBook = document.getElementsByClassName('delete-book');

/* Constructor. */
function Book(name, author, pages, read) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.bookID;
	this.bookEntry = document.createElement('div');
	this.bookEntry.innerHTML = `
			<div class="book-entry">
				<div class="col-4">
					<p class="book-title">${this.name}</p>
				</div>
				<div class="col-2">
					<p class="book-author">${this.author}</p>
				</div>
				<div class="col-2">
					<p class="page-quantity">${this.pages}</p>
				</div>
				<div class="col-2">
					<p class="book-read">${this.read}</p>
				</div>
				<div class="col-2">
					<p><button type="button" class="delete-book" data="${this.bookID}">Delete</button></p>
				</div>
			</div>	
				`;
}

function addBookToLibrary(name, author, pages, read) {
	myLibrary.push(new Book(name, author, pages, read));
}

function deleteBookFromLibrary(bookID) {
	myLibrary.splice(bookID, 1);
	bookContainer.innerHTML = "";
	render();
}

submitBook.addEventListener('click', function () {
	if(bookTitle.value == "" || bookAuthor.value == "" || pageQty.value == "") { 
		alert('Please enter a value for each field');
		return; 
	}

	let name = bookTitle.value;
	let author = bookAuthor.value;
	let pages = pageQty.value;
	let read = document.querySelector('input[name="read-book"]:checked').value;

	addBookToLibrary(name, author, pages, read);
	bookContainer.innerHTML = "";
	render();

	for(i = 0; i < inputFields.length-2; i++) { inputFields[i].value = ''; }
})

function render() {
	for (i = 0; i < myLibrary.length; i++) {
		myLibrary[i].bookID = i;
		let deleteID = i;
		bookContainer.appendChild(myLibrary[i].bookEntry);
		deleteBook = document.getElementsByClassName('delete-book');
		deleteBook[deleteID].onclick = function() {
			deleteBookFromLibrary(myLibrary[deleteID].bookID);
		};
	}
}
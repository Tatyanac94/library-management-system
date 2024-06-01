"use strict";

class Book {
    constructor(title, author, isbn, availableCopies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.availableCopies = availableCopies;
    }
  
    borrowBook() { // Method to borrow a book. Decrements availableCopies if there are available copies.
      if (this.availableCopies > 0) {
        this.availableCopies--;
        console.log(`You have borrowed "${this.title}".`);
      } else {
        console.log(`"${this.title}" is currently not available for borrowing. \nIt may be available next week when returned it's returned by the user whom borrowed it.`);
      }
    }
  
    returnBook() { // Method to return a borrowed book. Increments availableCopies.
      this.availableCopies++;
      console.log(`Thank you for returning "${this.title}".`);
    }
  }
  
  // My Examples:

  const Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565", 2);
  const Book2 = new Book("Little Women", "Louis May Alcott", "978-0743342565", 1);
  const Book3 = new Book("A Series of Unfortunate Events", "Lemony Snickett", "978-0743271115", 0);

  console.log(Book1, "\n"); // Logging Book1 object.
  Book1.borrowBook(); // Borrowing The Great Gatsby
  console.log(Book1, "\n"); // Logging Book1 object after borrowing.
  Book1.returnBook(); // Returning The Great Gatsby
  console.log(Book1, "\n"); // Logging Book1 object after returning.
  console.log(Book2, "\n"); // Logging Book2 object.
  Book2.borrowBook(); // Borrowing Little Women
  console.log(Book2, "\n"); // Logging Book2 object after borrowing.
  Book2.borrowBook(); // Borrowing Little Women again
  console.log(Book2, "\n"); // Logging Book2 object after attempting to borrow again.
  console.log(Book3, "\n"); // Logging Book3 object.
  Book3.borrowBook(); // Borrowing A Series of Unfortunate Events
  console.log(Book3, "\n"); // Logging Book3 object after attempting to borrow.

class Library {
    constructor(name) { // Constructor function to initialize Library objects with a name property.
      this.name = name;
      this.books = []; // Initializing an empty array to store books.
    }
  
    addBook(book) { // Method to add a book to the library.
      this.books.push(book);
    }
  
    removeBook(isbn) { // Method to remove a book from the library by ISBN.
      this.books = this.books.filter(book => book.isbn !== isbn);
    }
  
    findBookByTitle(title) { // Method to find a book in the library by its title.
      return this.books.find(book => book.title === title);
    }
  
    listAllBooks() { // Method to list all books in the library.
      this.books.forEach(book => console.log(book.title));
    }
  }
  
//My Examples:

  const library = new Library("My Library");
  
  const bookA = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-3-16-148410-0", "Classic", "English");
  const bookB = new Book("To Kill a Mockingbird", "Harper Lee", "978-2-940-01357-7", "Classic", "English");
  const bookC = new Book("How to Get Rich", "Jeff Bezos", "978-1-59327-940-7","Business", "English");

  // Adding books to the library.
  library.addBook(bookA);
  library.addBook(bookB);
  library.addBook(bookC);

  console.log("All books in the library:");
  library.listAllBooks(); // Listing all books in the library.

  console.log("\nFinding a book by title:");
  const foundBook = library.findBookByTitle("The Great Gatsby"); // Finding a book by title.
  console.log(foundBook); // Logging the found book.

  console.log("\nRemoving a book by ISBN:");
  library.removeBook("978-2-940-01357-7"); // Removing a book by ISBN.
  library.listAllBooks(); // Listing all books in the library after removal.


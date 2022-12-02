const Book = require('./Book');
const ReadingList = require('./ReadingList');

let myReadingList = new ReadingList();
//Arrange
let book1 = new Book("The Snow Crash","Neal Strephson",200,1992);
let book2 = new Book("The Earth","Unknown1",300,2000);
let book3 = new Book("The Sun","Unknown2",500,1999);
// Act
myReadingList.addBook(book1,'Dec 02,2022',4);
myReadingList.addBook(book2,'Dec 05,2022',3);
myReadingList.addBook(book3,'Dec 07,2022',2);
myReadingList.removeBook('The Earth');
let ReadBooks = myReadingList.getBooks();
console.log(ReadBooks);






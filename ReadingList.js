const Book = require('./Book');
class ReadBook{
    constructor(title,author,length,year,dateRead,rating){
        this.bookReadTitle = title;
        this.bookReadAuthor = author;
        this.bookReadLength = length;
        this.bookReadYear = year;
        this.dateRead = dateRead;
        this.rating = rating;
    }
}

let readingList = [];
class ReadingList{
    constructor(){
        readingList = [];
    }
    addBook(Book,dateRead,rating){
        try{
            let newBook = new ReadBook(Book.title,Book.author,Book.length,Book.year,dateRead,rating);
            readingList.push(newBook);
            return true;
        }
        catch(exception){
            return false;
        }
    }
    getBooks(){
        return readingList;
    }
    numberReads(){
        const numberReads = readingList.length;
        return numberReads;
    } 
}
module.exports = ReadingList;
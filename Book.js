// function Book(title,author,length,year){
//     const book = {
//         Title:title,
//         Author:author,
//         Length : length,
//         Year: year
//     }
//     return book;
// }

class Book{
    constructor(title,author,length,year){
        this.title = title;
        this.author = author;
        this.length = length;
        this.year = year;
    }
}

module.exports = Book;
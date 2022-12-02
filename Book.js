function Book(title,author,length,year){
    const book = {
        Title:title,
        Author:author,
        Length : length,
        Year: year
    }
    return book;
}

module.exports = Book;
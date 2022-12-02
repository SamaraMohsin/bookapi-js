const Book = require('./Book');
function ReadingList(Book,dateRead,rating){
    const readingList = {};

    function getBook(){
        return ReadingList;
    }

    function numberReads(){
        const numberReads = Object.keys(readingList).length;
        return numberReads;
    } 
}

module.exports = ReadingList;
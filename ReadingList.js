const Book = require('./Book');
let readingList = new Object();

class ReadingList{
    constructor(){
        this.readingList = new Object();
    }
    getBook(){
        return this.readingList;
    }
    numberReads(){
        const numberReads = Object.keys(readingList).length;
        return numberReads;
    } 
}

module.exports = ReadingList;
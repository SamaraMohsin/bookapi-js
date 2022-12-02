const Book = require('./Book');
// function ReadingList(){
//     const readingList = {};

//     function getBook(){
//         return ReadingList;
//     }

//     function numberReads(){
//         const numberReads = Object.keys(readingList).length;
//         return numberReads;
//     } 
// }

let readingList = new Object();

class ReadingList{
    constructor(){
        this.readingList = new Object();
    }
    getBook(){
        return ReadingList;
    }
    numberReads(){
        const numberReads = Object.keys(readingList).length;
        return numberReads;
    } 
}

module.exports = ReadingList;
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
        let BookString = "";
        for(let i=0;i<readingList.length;i++){
            if(i!==0){
                BookString+=", ";
            }
            let star = "";
            for(let j=0;j<readingList[i].rating;j++){
                star+="*";
            }
            BookString+= readingList[i].bookReadTitle+" by "+readingList[i].bookReadAuthor+", "+readingList[i].bookReadLength+" pages, "+readingList[i].bookReadYear+" read on "+readingList[i].dateRead+", "+star;
        }
        return BookString;
    }
    removeBook(title){
        let index =0;
        for (let i=0; i<readingList.length; i++){
            if(readingList[i].bookReadTitle === title){
                readingList.splice(i,1);
            }
        }
    }
    numberReads(){
        const numberReads = readingList.length;
        return numberReads;
    } 
}
module.exports = ReadingList;
const Book = require('./Book');
const ReadingList = require('./ReadingList');


describe('All Acceptance Criterias',()=>{
    let myReadingList;
    beforeEach(()=> {
        myReadingList = new ReadingList();
    });
    //Given that I visit the site, when I first start, I expect my list to be empty.
    test('AC:01',()=>{
        //Act
        let ReadBooks = myReadingList.numberReads();
        //Assert
        expect(ReadBooks).toBe(0);
    });
    // Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.
    test('AC:02',()=> {
        //Arrange
        let book1 = new Book('The John',"John Patric",1345,2022);
        // Act
        myReadingList.addBook(book1,'Dec 01,2022',5);
        let ReadBooks = myReadingList.numberReads();
        // Assert
        expect(ReadBooks).toBe(1);
    });

    //Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.
    test('AC:03',()=> {
        //Arrange
        let book1 = new Book("The Snow Crash","Neal Strephson",200,1992);
        let book2 = new Book("The Earth","Unknown1",300,2000);
        let book3 = new Book("The Sun","Unknown2",500,1999);

        // Act
        myReadingList.addBook(book1,'Dec 02,2022',4);
        myReadingList.addBook(book2,'Dec 05,2022',3);
        myReadingList.addBook(book3,'Dec 07,2022',2);
        let ReadBooks = myReadingList.numberReads();
        // Assert
        expect(ReadBooks).toBe(3);
    });

    //Given that I have a book in my list, when I call removeBook("<title>") with "title" representing the title of my book that I want to delete,
    // then when I call getBooks() the book I deleted should no longer be there.
    test('AC:04',()=> {
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
        // Assert
        expect(ReadBooks).toBe('The Snow Crash by Neal Strephson, 200 pages, 1992 read on Dec 02,2022, ****, The Sun by Unknown2, 500 pages, 1999 read on Dec 07,2022, **');
    
    });

    //Given that I have an empty list, when I add a new book I expect getBooks() to return a list of books that includes the book I added.
    test('AC:05',()=> {
        //Arrange
        let book1 = new Book("The Snow Crash","Neal Strephson",200,1992);
        let book2 = new Book("The Earth","Unknown1",300,2000);
        let book3 = new Book("The Sun","Unknown2",500,1999);
        // Act
        myReadingList.addBook(book1,'Dec 02,2022',4);
        myReadingList.addBook(book2,'Dec 05,2022',3);
        myReadingList.addBook(book3,'Dec 07,2022',2);
        let ReadBooks = myReadingList.getBooks();
        // Assert
        expect(ReadBooks).toBe('The Snow Crash by Neal Strephson, 200 pages, 1992 read on Dec 02,2022, ****, The Earth by Unknown1, 300 pages, 2000 read on Dec 05,2022, ***, The Sun by Unknown2, 500 pages, 1999 read on Dec 07,2022, **');
    
    });
});


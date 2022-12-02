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
    })
});


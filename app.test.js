const Book = require('./Book');
const ReadingList = require('./ReadingList');

//Given that I visit the site, when I first start, I expect my list to be empty.
describe('GetEmptyListOnFirstCall',()=>{
    test('AC:01',()=>{
        //Arrange
        let myReadingList = new ReadingList();
        //Act
        let ReadBooks = myReadingList.numberReads();
        console.log(ReadBooks);
        //Assert
        expect(ReadBooks).toBe(0);
    });
});
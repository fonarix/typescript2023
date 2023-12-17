var OperationTypesEnum;
(function (OperationTypesEnum) {
    OperationTypesEnum["ADD"] = "add";
    OperationTypesEnum["SUB"] = "sub";
    OperationTypesEnum["MUL"] = "mul";
    OperationTypesEnum["DIV"] = "div";
})(OperationTypesEnum || (OperationTypesEnum = {}));
class CCalculator {
    add(inNumber0, inNumber1) {
        return inNumber0 + inNumber1;
    }
    sub(inNumber0, inNumber1) {
        return inNumber0 - inNumber1;
    }
    div(inNumber0, inNumber1) {
        if (0 === inNumber1) {
            return NaN;
        }
        return inNumber0 / inNumber1;
    }
    mul(inNumber0, inNumber1) {
        return inNumber0 * inNumber1;
    }
}
function calculate(calc, inNum0, inNum1, operation) {
    //const result = calc[operation];
    const result = calc[operation](inNum0, inNum1);
    if (Number.isNaN(result)) {
        return "Can't divide on zero!";
    }
    return result.toString();
}
const addResult = calculate(new CCalculator(), 10, 20.0, OperationTypesEnum.ADD);
const divResult0 = calculate(new CCalculator(), 10, 20.0, OperationTypesEnum.DIV);
const divResult1 = calculate(new CCalculator(), 10, 0.0, OperationTypesEnum.DIV);
console.log(addResult);
console.log(divResult0);
console.log(divResult1);
console.log("Calc completed");
;
;
;
///////////////////////////////////////////////////////////////////////////////
class CAuthor {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    toString() {
        return this.name + ' ' + this.surname;
    }
}
;
class CBook {
    bookIsbn;
    authrors;
    title;
    description;
    constructor(bookIsbn, authrors, title, description) {
        this.bookIsbn = bookIsbn;
        this.authrors = authrors;
        this.title = title;
        this.description = description;
    }
    toString() {
        return `Book Isbn: ${this.bookIsbn}, Authors: ${this.authrors.join(', ')}`;
    }
}
;
class CBookService {
    books = [];
    MockData() {
        // mock authors:
        const authors = [new CAuthor("Nicloas", "Cage"), new CAuthor("Arnold", "Schwarzenegger"), new CAuthor("Sylvester", "Stallone"), new CAuthor("Jean-Claude", "Van Damme"), new CAuthor("Chuck", "Norris"), new CAuthor("Dolph", "Lundgren")];
        // mock books:
        const book0 = new CBook(7664183, [authors[0], authors[1]], "The world of math", "Biggerst description eva!");
        const book1 = new CBook(7667777, [authors[1], authors[2]], "The world of NO math", "Big description foever.");
        const book2 = new CBook(2667722, [authors[3], authors[2]], "The Foo Fighters", "Greatest Hits, Everlong, My Hero, Best Of You, Learn to Fly, The Pretender");
        const book3 = new CBook(3667733, [authors[3], authors[4]], "The world of math", "Biggerst description eva!");
        const book4 = new CBook(3667733, [authors[5]], "The great title book", "No description anymore!");
        this.books.push(book0);
        this.books.push(book1);
        this.books.push(book2);
        this.books.push(book3);
        this.books.push(book4);
    }
    constructor() {
        this.MockData();
    }
    get() {
        return JSON.stringify(this.books);
    }
    getWithIsbn(bookIsbn) {
        const book = this.books.find((book) => book.bookIsbn == bookIsbn);
        if (null == book) {
            return JSON.stringify('');
        }
        return JSON.stringify(book);
    }
}
;
const bookService = new CBookService();
//console.log(bookService.books[0].toString());
console.log("get request:");
console.log(bookService.get());
console.log("Single book request:");
console.log(bookService.getWithIsbn(2667722));
console.log("BookService completed!");
//bookService.get()
//# sourceMappingURL=index.js.map

type CalculatorOperationFunc = (inNumber0: number, inNumber1: number) => number;

interface ICalculator {
	add: CalculatorOperationFunc;
	sub: CalculatorOperationFunc;
	div: CalculatorOperationFunc;
	mul: CalculatorOperationFunc;
}

enum OperationTypesEnum {
	ADD = 'add',
	SUB = 'sub',
	MUL = 'mul',
	DIV = 'div'
}

class CCalculator implements ICalculator {
	add(inNumber0: number, inNumber1: number): number {
		return inNumber0 + inNumber1;
	}

	sub(inNumber0: number, inNumber1: number): number {
		return inNumber0 - inNumber1;
	}

	div(inNumber0: number, inNumber1: number): number {
		if (0 === inNumber1) {
			return NaN;
		}
		return inNumber0 / inNumber1;
	}

	mul(inNumber0: number, inNumber1: number): number {
		return inNumber0 * inNumber1;
	}
}

function calculate(calc: ICalculator, inNum0: number, inNum1: number, operation: OperationTypesEnum): string {

	//const result = calc[operation];
	const result = calc[operation](inNum0, inNum1);
	if (Number.isNaN(result)) {
		return "Can't divide on zero!";
	}

	return result.toString();
}

const addResult = calculate(new CCalculator(), 10, 20.0, OperationTypesEnum.ADD)
const divResult0 = calculate(new CCalculator(), 10, 20.0, OperationTypesEnum.DIV)
const divResult1 = calculate(new CCalculator(), 10, 0.0, OperationTypesEnum.DIV)

console.log(addResult);
console.log(divResult0);
console.log(divResult1);
console.log("Calc completed");


/**
 * Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги.
 * Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок,
 * авторів і методи веб-сервісу для отримання інформації про книжки та авторів.
 * Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте
 * інтерфейси для отримання інформації про книги та авторів.
 *
 * / */

interface IAuthor {
	readonly name: string;
	readonly surname: string;

	toString(): string;
};

interface IBook {
	authrors: IAuthor[];
	bookIsbn: number;
	title: string;
	description: string;

	toString(): string;
};

interface IBookService {

	get(): string;
	get(bookIsbn: number): string;
};

///////////////////////////////////////////////////////////////////////////////

class CAuthor implements IAuthor {

	constructor(public name: string, public surname: string) {
	}

	public toString(): string {
		return this.name + ' ' + this.surname;
	}

};

class CBook implements IBook {
	constructor(public readonly bookIsbn: number, public readonly authrors: IAuthor[], public readonly title: string, public readonly description: string) {
	}

	public toString(): string {
		return `Book Isbn: ${this.bookIsbn}, Authors: ${this.authrors.join(', ')}`;
	}
};

class CBookService implements IBookService {

	private books: IBook[] = [];

	private MockData() {
		// mock authors:
		const authors: IAuthor[] = [new CAuthor("Nicloas", "Cage"), new CAuthor("Arnold", "Schwarzenegger"), new CAuthor("Sylvester", "Stallone"), new CAuthor("Jean-Claude", "Van Damme"), new CAuthor("Chuck", "Norris"), new CAuthor("Dolph", "Lundgren")];

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

	get(): string {
		return JSON.stringify(this.books);
	}

	getWithIsbn(bookIsbn: number): string {
		const book = this.books.find((book) => book.bookIsbn == bookIsbn);
		if (null == book)
		{
			return JSON.stringify('');
		}
		return JSON.stringify(book);
	}

};



const bookService = new CBookService();

//console.log(bookService.books[0].toString());
console.log("get request:");
console.log(bookService.get());
console.log("Single book request:");
console.log(bookService.getWithIsbn(2667722));

console.log("BookService completed!");

//bookService.get()
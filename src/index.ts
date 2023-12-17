
/**
 * Створіть класи Circle, Rectangle, Square і Triangle.
 * У кожного з них є загальнодоступний метод calculateArea.
 * У кожної фігури є загальнодоступні властивості - колір і назва,
 * які не можна змінювати після створення. У Square і Rectangle
 * зі свого боку є ще додатковий метод print, який виводить
 * рядок із формулою розрахунку площі
 */

/**
 * Abstract classes
 */


type ColorType = number | string;


interface IBaseShape {
	readonly name: string;
	readonly color: ColorType;
	calculateArea(): number;
};

interface IPritable {
	print() : string;
}

interface IPritable2 {
	print() : string;
}

abstract class BaseShape implements IBaseShape {
	public readonly name: string;
	public readonly color: ColorType;

	constructor(name: string, color: ColorType) {
		this.name = name;
		this.color = color;
	}

	public abstract calculateArea(): number;
};

abstract class PritableBaseShape extends BaseShape implements IPritable {
	public abstract print() : string;
}

/**
 * Abstract classes implementations
 */


class Circle extends BaseShape {

	constructor(name: string, color: ColorType) {
		super(name, color);
	}

	calculateArea(): number {
		return 10;
	}
};

class Rectangle extends PritableBaseShape {

	constructor(name: string, color: ColorType) {
		super(name, color);
	}

	calculateArea(): number {
		return 10;
	}

	print(): string {
		return "width*width";
	}

};

class Square extends PritableBaseShape {

	constructor(name: string, color: ColorType) {
		super(name, color);
	}

	calculateArea(): number {
		return 10;
	}

	print(): string {
		return "width*height";
	}

};

class Triangle extends BaseShape {

	constructor(name: string, color: ColorType) {
		super(name, color);
	}

	calculateArea(): number {
		return 10;
	}
};


const triangle = new Triangle("SomeStriangle", 0xFFFF00);
const square = new Square("Square Shape", 0x00FFFF);
const rect = new Rectangle("Rectangle Shape", 0xFF00FF);
const circle= new Circle("The Circle", 0xFF0000);

console.log(triangle);
console.log(square, square.print());
console.log(rect, square.print());
console.log(circle);

console.log("Task completed!");


/**
 * Створіть класи Circle, Rectangle, Square і Triangle.
 * У кожного з них є загальнодоступний метод calculateArea.
 * У кожної фігури є загальнодоступні властивості - колір і назва,
 * які не можна змінювати після створення. У Square і Rectangle
 * зі свого боку є ще додатковий метод print, який виводить
 * рядок із формулою розрахунку площі
 */
class BaseShape {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
;
class PritableBaseShape extends BaseShape {
}
/**
 * Abstract classes implementations
 */
class Circle extends BaseShape {
    constructor(name, color) {
        super(name, color);
    }
    calculateArea() {
        return 10;
    }
}
;
class Rectangle extends PritableBaseShape {
    constructor(name, color) {
        super(name, color);
    }
    calculateArea() {
        return 10;
    }
    print() {
        return "width*width";
    }
}
;
class Square extends PritableBaseShape {
    constructor(name, color) {
        super(name, color);
    }
    calculateArea() {
        return 10;
    }
    print() {
        return "width*height";
    }
}
;
class Triangle extends BaseShape {
    constructor(name, color) {
        super(name, color);
    }
    calculateArea() {
        return 10;
    }
}
;
const triangle = new Triangle("SomeStriangle", 0xFFFF00);
const square = new Square("Square Shape", 0x00FFFF);
const rect = new Rectangle("Rectangle Shape", 0xFF00FF);
const circle = new Circle("The Circle", 0xFF0000);
console.log(triangle);
console.log(square, square.print());
console.log(rect, square.print());
console.log(circle);
console.log("Task completed!");
//# sourceMappingURL=index.js.map
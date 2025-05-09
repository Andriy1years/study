class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("незя создавать обьект")
        }

    }

    getArea() {
        throw new Error("нужно переопределить")
    }
    describe() {
        throw new Error("нужно переопределить")
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
    describe() {
        return `радиус круга ${this.radius}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width
        this.height = height
    }
     getArea() {
        return this.width * this.height;
    }
    describe() {
        return `высота ${this.width} ширина ${this.height}`;
    }
}

const curcle = new Circle(6);
console.log(curcle.describe());
console.log(curcle.getArea());

const rectangle = new Rectangle(7, 4);
console.log(rectangle.describe());
console.log(rectangle.getArea());

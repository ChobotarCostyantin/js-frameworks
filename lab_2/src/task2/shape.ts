interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}
class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    scale(factor: number): void {
        this.radius *= factor;
    }
}
class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle implements Shape {
    base: number;
    height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
    getArea(): number {
        return 0.5 * this.base * this.height;
    }
    getPerimeter(): number {
        return this.base + this.height + Math.sqrt(this.base * this.base + this.height * this.height);
    }
    scale(factor: number): void {
        this.base *= factor;
        this.height *= factor;
    }
}

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(5, 10),
    new Triangle(5, 10),
];

let totalArea = 0;
let totalPerimeter = 0;
for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log(totalArea);
console.log(totalPerimeter);
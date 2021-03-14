// function Course(name, price) {
//     return {
//         name,
//         price
//     }
// }
// console.log(Course('Php', 1000))
// function Course(name, price) {
//     this.value = name;
//     this.price = price;
// }
// const phpCourse = new Course('php', 1000)
// console.log(phpCourse);

// Course
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.author = 'tri'
    }

    printer() {
        console.log('Course: ', this.name, this.price, this.author)
    }
}
const coursePhp = new Course('php', 1000);
coursePhp.printer()

// Retangle
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // area() {
    //     return this.height * this.width;
    // }

    static createSquare(length) {
        return new Rectangle(length, length)
    }

    get area() {
        return this.height * this.width;
    }

}

class Square extends Rectangle {
    constructor(height, width) {
        super(height, width);
    }
    inradius() {
        return this.height / 2;
    }
}

const obj = new Square(3)
console.log(obj.inradius())
// const obj = new Rectangle(3, 5);
// console.log(obj);
// // console.log(obj.area());

// const obj1 = Rectangle.createSquare(5);
// console.log(obj1)
// console.log(obj.area);
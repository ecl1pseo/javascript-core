//// //Task 1
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// }

// //Task 2
// let person = {
//     firstName: "Jon",
//     secondName: "Snow",
//     family: "Stark",
//     age: 20,
//     totemAnimal: "Wolf"
// };

// function showProps(obj) {
//     console.log(Object.keys(obj));
//     let arr = [];
//     for (let key in obj) {
//         arr.push(obj[key]);
//     }
//     console.log(arr);
// }


//Task 3
let workers = [];
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workers.push(this);
    }
    #expirience = 1.2;
    get expirience() {
        return this.#expirience;
    }
    set expirience(value) {
        this.#expirience = value;
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.showSalary() * this.#expirience;
    }
}
Worker.expirience = 1.5;
let worker1 = new Worker("Raygar Targaryen", 75, 30);
let worker2 = new Worker("Legolas", 50, 30);
let worker3 = new Worker("Till Lindemann", 130, 30);
let worker4 = new Worker("John Johnson", 20, 23);
console.log(worker4.fullName);
worker4.showSalary();
console.log("Experience: " + worker4.expirience);
worker4.showSalaryWithExperience();
worker4.expirience = 1.8;
console.log("New experience: " + worker4.expirience);
worker4.showSalaryWithExperience();
let worker5 = new Worker("Tom Tomson", 48, 22);
console.log(worker5.workingDays);

workers.sort(function (a, b) {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
});

for (let worker of workers) {
    console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
}

//checking



// //Task 4
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//         return this.name + " " + this.surname;
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(middleName) {
//         return `${this.surname} ${this.name} ${middleName}`;
//     }
//     showCourse() {
//         let date = new Date();
//         let currentYear = date.getFullYear();
//         return currentYear - this.year;
//     }
// }

// //checking
// var stud1 = new Student("Petro", "Petrenko", 2017);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());


// //Task 5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// class Triangle extends GeometricFigure {
//     constructor(b, h) {
//         super();
//         this.b = b;
//         this.h = h;
//     }
//     getArea() {
//         return 1 / 2 * this.b * this.h;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(a) {
//         super();
//         this.a = a;
//     }
//     getArea() {
//         return this.a * this.a;
//     }

// }
// class Circle extends GeometricFigure {
//     constructor(r) {
//         super();
//         this.r = r;
//     }
//     getArea() {
//         return Math.PI * this.r * this.r;
//     }
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

// function handleFigures(figures) {
//     let totalArea = 0;
//     for (let figure of figures) {
//         if (figure instanceof GeometricFigure) {
//             totalArea += figure.getArea();
//             console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
//         }
//     }
//     console.log(`Total area: ${totalArea}`);
// }
// handleFigures(figures);


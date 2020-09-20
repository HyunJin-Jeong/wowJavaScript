'use strict';
// Object-oriendted progamming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: Hello!`);
    }
}

const hyunjin = new Person('hyunjin', 21);
console.log(hyunjin.name);
console.log(hyunjin.age);
hyunjin.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //    throw Error('Age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('1', 'user', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    // publicField = 2;
    // #privateField = 0; // '#': private field
}
const experiment = new Experiment();
console.log(experiment.publicField);
// console.log(experiment.privateField); Error

// 4. Static properties and methods
// Too soon!
class Article {
    // static publisher = 'Hyunjin World';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log('Hyunjin world');
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); Error
// console.log(Article.publisher);
Article.printPublisher();
// article1.printPublisher(); Error

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        console.log('Triangle!!!');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
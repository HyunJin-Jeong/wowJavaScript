'use strict';


/*

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color`)
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{
    draw(){
        super.draw();
        console.log('Nice Color!');
    }
}
class Triangle extends Shape{
    getArea(){
        return (this.width * this.height) / 2
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }

    static printHelloUser(){
        console.log('Hello! User');
    }
}

const user1 = new User('hyunjin', 'jeong', 1567);
console.log(user1.age);
User.printHelloUser();

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello!`)
    }
}

const hyunjin = new Person('hyunjin', 21);
console.log(hyunjin.name);
console.log(hyunjin.age);
hyunjin.speak();
*/
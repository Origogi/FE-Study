"use strict";
// Object-oriented programing
// class : template
// object ; instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    //field
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

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
    //   throw Error("age can not be negetive");
    // }
    this._age = value > 0 ? value : 0;
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
  publicField = 2;
  #privateFied = 3; // 최신 브라우져에서 지원하지 않음
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined

// 4. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color `);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea() {
    // return (this.width * this.height) / 2;
    return super.getArea() / 2;
  }

  draw() {
    super.draw();
    console.log("🔻");
  }

  toString() {
    return `Triangle: color : ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
const triangle = new Triangle(20, 20, "red");

rectangle.draw();
triangle.draw();

console.log(rectangle.getArea());
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
console.log(triangle.toString())

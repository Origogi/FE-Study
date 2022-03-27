"use strict";

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  myname: "tory",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump() {
    console.log(`${this.myname} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["myname", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  //   console.log(`key : ${key}, value : ${value}`);
  // return value;

  return key === "myname" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
console.log(json);
rabbit.jump();

// obj.jump(); // undefined function

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

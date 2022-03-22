// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object

// 1. Object literal
const obj1 = {};
const obj2 = new Object(); // `object constructor` syntax

const ellie = { myName: "ellie", age: 4 };
ellie.hasJob = true; // 오브젝트에 새로운 변수 추가가 가능

delete ellie.hasJob; // 오브젝트에 기존 값을 제거하는 것도 가능하다.

// 2. Computed properties
console.log(ellie.myName);
console.log(ellie["myName"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, "myName");

// 3. Property value shorthand

const person1 = makePerson("Origogi", 30);
console.log(person1.name);

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor function
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this;
}

const person2 = new Person("GGae", 28);
console.log(person2.name);

// 5. in operator : property existence check (key in obj)
console.log("name" in person2);
console.log("age" in person2);

// 6. for..in vs for..of
console.clear();

for (key in ellie) {
  console.log(key);
}

const array = [1, 2, 3, 4, 5];

// for (value of iterable)
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1,obj2])
const user = { name: "ellie", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user.name);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

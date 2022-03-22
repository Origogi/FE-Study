"use strict";

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2, 3];

// 2. Index position
const fruits = ["🍊", "🍋", "🍕"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array

// . for

for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

// 4. Addition, deletion

// unshift: add an item to  the benigging

fruits.push("🍠", "🥂");
console.log(fruits);
fruits.pop();
fruits.pop();

console.log(fruits);

fruits.push("🍠", "🥂");
fruits.splice(1);
console.log(fruits);

// combine two array
const fruits2 = ["🍮", "🥞"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
const fruits3 = ["🍊", "🍋", "🍕", "🍮", "🥞"];
console.log(fruits3.indexOf("🍕"));
console.log(fruits3.indexOf("🥂"));

// include
console.log(fruits3.includes('🍮'))

// lastIndexOf
console.clear();
const fruits4 = ["🍊", "🍋", "🍕", "🍮", "🥞"];
fruits4.push("🍊");
console.log(fruits4.indexOf('🍊'))  // 0
console.log(fruits4.lastIndexOf('🍊'))  // 5

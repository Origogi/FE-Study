// Primitive 타입
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// Object 타입
let obj = {
  name: "ellie",
  age: 5,
};

console.log(obj.name);

let obj2 = obj;
obj2.name = "Origogi";
console.log(obj.name);

obj = 5;
console.log(obj);

const num = 5;
num = 6; // 실행 에러

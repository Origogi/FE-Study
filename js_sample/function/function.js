// 1. Function declaration
// function is object in JS

function printHello() {
  console.log("Hello");
}

printHello();

// 2. Parameter
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters
function showMessage(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}

showMessage("Hi!");

// 4. Rest parameters
function printAll(...args) {
  //   for (i = 0; i < args.length; i++) {
  //     console.log(args[i]);
  //   }

  //   for (const arg of args) {
  //     console.log(arg);
  //   }
  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
}
printMessage();
// console.log(message);

// 6. Return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(`sum : ${sum(1, 2)}`);

// 함수의 리턴 값을 정의하지 않은 경우 디폴트로 undefine 이다.

// 7. Early return, Early exit
function upgradeUser(user) {
  // if (user.point > 10) {  bad case

  // }

  if (user.point <= 10) {
    return 0;
  }
}

// First-class function
// functions are treated like any other variable
// can be assigned a value to variable
// can be passed as an argument to other function
// can be returned by another function

const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer == "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes");
};

const printNo = function () {
  console.log("no");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint");
};

const simplePrint2 = () => console.log("Simple print!!");
simplePrint2();
const addFunc = (a, b) => a + b;
console.log(addFunc("hello", " world"));
console.log(addFunc(1, 2));

// IIFE : Immediately Invoked Function Expression, 함수를 선언과 함께 호출
(function hello() {
  console.log("IIFE");
})();

// Quiz time!

console.log(calculate("add", 3, 4));
console.log(calculate("multiply", 3, 4));

function calculate(command, a, b) {
  let result;
  switch (command) {
    case "add":
      result = a + b;
      break;
    case "substract":
      result = a - b;
      break;
    case "divide":
      result = a / b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "remainder":
      result = a % b;
      break;
  }
  return result;
}

console.log(calculate("add", 3, 4));
console.log(calculate("multiply", 3, 4));

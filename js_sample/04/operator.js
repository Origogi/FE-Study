// 1. String concatenation

console.log("my" + " cat");
console.log("1" + 2);
console.log(`String literals : 1 + 2 = ${1 + 2}`);

// 2. Numberic operators

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;

// Pre-Increment
const preIncrement = ++counter;
console.log(preIncrement);

// Post-Increment
counter = 2;
const postIncrement = counter++;
console.log(postIncrement);

// 4. Logical operators
const value1 = true;
const value2 = 4 > 2;

// || (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("wait");
  }
  return true;
}

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);

// ! (not)
console.log(!value1);

// 5. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference

const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality -puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 6. Conditional operators : if
// if , if else, else
const myName = "coder";
if (myName === "ellie") {
  console.log("Welcome, Ellie");
} else if (myName === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 7. Ternary operator: ?
// condition ? value1 : value2
console.log(myName === 'ellie' ? 'yes' : 'no');

// 8. Switch statement'
const browser = 'IE'
switch (browser) {
    case 'IE' : 
        console.log('go away');
        break;
    case 'Chrome' :
    case "Firefox" :
        console.log('love you');
        break;
    default:
        console.log('small all!');
        break;
}

// 9. Loops
let i = 3;
while ( i > 0) {
    console.log(`while: ${i}`);
    i--;
}

for (i =3 ;i>0;i-- ){
    console.log(`for : ${i}`);
}

// Quiz #1
for (i = 0;i<=10;i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Quiz #2
i = 0
while (i < 10) {
    console.log(i);
    if (i == 8) {
        break;
    }
    i++;
}

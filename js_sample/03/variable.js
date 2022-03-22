"use strict";

// 1. Variable
// 변수 = 변경 될 수 있는 값

let name = "Ellie";
console.log(name);
name = "Orogogi";
console.log(name);

// 2. Constants
// 상수 = 절대 변경할수 없는 값
const daysInWeek = 7;
const maxNumber = 5;

// Mutable type = let
// Immutable type = const

// 3. Variable Type
// primitive(single item) : 더 이상 쪼 갤수 없는 가장 작은 변수 타입
// object : 한 개 이상의 single item 이 집합, 함수

const count = 10; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

const infinity = 1 / 0;
const negInfinity = -1 / 0;
const nAn = "not number" / 2;

console.log(infinity);
console.log(negInfinity);
console.log(nAn);

// 4. string
// js 는 char 타입이 없고 무조건 string type 이다.
const char = "c";
const brendan = "brandan";
const greeting = "Hello " + brendan;
console.log(`value : ${greeting}, type : $${typeof greeting}`);
const hellobob = `hi ${brendan}` // template literals (string)
console.log(`value : ${hellobob}, type : $${typeof hellobob}`);

// 5. null
let nothing = null;
console.log(`value : ${nothing}, type : $${typeof nothing}`);


// 5. undefined
let x;
console.log(`value : ${x}, type : $${typeof x}`);

// 6. Dynamic typing 
// 보통의 프로그래밍 언어는 타입이 결정이 되면 변경이 안되지만 js는 실행 중에 타입이 변경이 될 수 있다.
let text = 'Hello'
console.log(`value : ${text}, type : $${typeof text}`);
text = 1;
console.log(`value : ${text}, type : $${typeof text}`);

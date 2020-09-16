// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(3 % 2);
console.log(3 ** 2);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statment
// nullableObject && nullableObject.somthing
/*
if (nullableObject != null) {
    nullableObject.somthing;
}
*/

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('Ohhhhhu!!');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);

// object equality by reference
const hyun1 = { name: 'hyun' };
const hyun2 = { name: 'hyun' };
const hyun3 = hyun1;
console.log(hyun1 == hyun2);
console.log(hyun1 === hyun2);
console.log(hyun1 === hyun3);

// equality
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // flase
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'hyunjin';
if (name === 'hyunjin') {
    console.log(`Hello, ${name}`);
} else if (name === 'programmer') {
    console.log(`Don't give up ${name}`);
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'hyunjin' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love it!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--) {
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(`Q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
    if (i === 8) {
        break;
    }
    console.log(`Q2. ${i}`);
}
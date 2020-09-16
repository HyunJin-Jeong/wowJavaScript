// 1. Use strict
// added in ES 5
// use this for Valina JavaScript
'use strict';

// 2. Variable (read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'hyunjin';
    console.log(name);
    name = 'hello';
    console.log(name);
}
// console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
age = 4;
var age; // WTF?!
console.log(age);
{
    var test = 'test';
}
console.log(test);

// 3. Contants (read only)
// use const whenever possible
// only use let if variable needs to change.
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const myBirthDay = '000524';

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity, negativeInfinity, nAn);

// bigInt (fairly new, don't use it yes)
// const bigInt = 312432541254215125632874236578236592n;
// console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const hyunjin = 'hyunjin';
const greeting = `hello ${hyunjin}!`;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
console.log(`value: ${canRead}, type: ${typeof canRead}`);

// null
let nothing = null;
console.log(`value: ${canRead}, type: ${typeof test}`);

// undefined
let nothing2 = undefined;
let nothing3;
console.log(`value: ${nothing2}, type: ${typeof nothing2}`);
console.log(`value: ${nothing3}, type: ${typeof nothing3}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' * '14';
console.log(`value: ${text}, type: ${typeof text}`);

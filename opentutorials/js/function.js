// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function print(message) {
    console.log(message);
}
print('hihihihihi');
print(3213214);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'developer';
}
const hyunjin = { name: 'hyunjin' };
console.log(hyunjin);
changeName(hyunjin);
console.log(hyunjin);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
showMessage('Hi!', 'hyunjin');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (arg of args) {
        console.log(arg);
    }
}
printAll('Jeong', 'Hyun', 'Jin')

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(result);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade login...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade login...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const justPrint = function() {
    // anonymous function
    console.log('print');
}
justPrint();
const printAgain = justPrint;
printAgain();

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'hyunjin') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('Yes!');
}
// named function
// better debugging in debugger's stack traces
const printNo = function print() {
    console.log('No!');
    // recursions
    // print();
}
randomQuiz('hyunjin', printYes, printNo);
randomQuiz('qwer', printYes, printNo);

// Arrow function
const simplePrint = () => console.log('nice!');
simplePrint();

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
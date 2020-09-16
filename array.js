'use strict';

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('peach', 'orange');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// unshift: add an item to the benigging
fruits.unshift('orange');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

// splice: remove an item by index position
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'melon', 'lemon');
console.log(fruits);

// combine two arrays
const newFruits = ['coconut', 'dragon fruit'];
const combineFruits = fruits.concat(newFruits);
console.log(combineFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('melon'));
console.log(fruits.indexOf('coconut'));

// includes
console.log(fruits.includes('lemon'));
console.log(fruits.includes('coconut'));

// lastIndexOf
fruits.push('melon');
console.log(fruits);
console.log(fruits.indexOf('melon'));
console.log(fruits.lastIndexOf('melon'));


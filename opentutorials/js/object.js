// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }

// 1. Literals and properties
const object1 = {}; // 'object literal' syntax
const object2 = new Object(); // 'object constructor' syntax

function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
}

const hyunjin = { name: 'hyunjin', age: 21 };
printPerson(hyunjin);

// can add properties later
hyunjin.hasJob = true;
console.log(hyunjin.hasJob);

// can delete properties later
delete hyunjin.hasJob;
console.log(hyunjin.hasJob);

// 2. Computed properties
// key should be always string
console.log(hyunjin.name);
console.log(hyunjin['name']);
hyunjin['hasJob'] = true;
console.log(hyunjin.hasJob);

function printValue(obj, key) {
    // console.log(obj.key); undefiend
    console.log(obj[key]);
}

printValue(hyunjin, 'age');

// 3. Property value shorthand
const person1 = { name: 'jeong', age: 232};
const person2 = { name: 'hyun', age: 343};
const person3 = new Person('jin', 32);

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

console.log(person3);

// 5. in operator: property existence check (key in obj)
console.log('name' in hyunjin);
console.log('age' in hyunjin);
console.log('unknown' in hyunjin);

// 6. for..in vs for..of
// for (key in obj)
for (key in hyunjin) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5, 3];
for (value of array) {
    console.log(value);
}

// 7. Cloning
const user = { name: 'hyunjin', age: 21 };
const user2 = user;
user2.name = 'developer';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assign(dest, [obj1, obj2, obj3 ...])
const user4 = {};
Object.assign(user4, user);
const user5 = Object.assign({}, user)
console.log(user4);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed); // { color: 'blue', size: 'big' }
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'hyunjin',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log('can jump!');
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jeong' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // string으로 변했던 birthDate를 Date 형식으로 변경
});
// const obj = JSON.parse(json);
// console.log(obj);
rabbit.jump();
// obj.jump(); Function
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // String
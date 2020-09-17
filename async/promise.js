'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('hyunjin');
        // reject(new Error('No network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error); 
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getChicken = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = chicken =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${chicken} >> egg`)), 1000);
        // setTimeout(() => resolve(`${chicken} >> egg`), 1000);
    });
const getFry = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} >> Fry`), 1000);
    });

getChicken() //
    // .then(chicken => getEgg(chicken))
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(getFry)
    // .then(egg => getFry(egg))
    // .then(meal => console.log(meal));
    .then(console.log)
    .catch(console.log);


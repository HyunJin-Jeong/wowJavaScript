// async & await
// clear style of using promise

// 1. async
async function fetUser() {
    return 'hyunjin';
}
/*
function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve('hyunjin');
    });
}
*/

const user = fetUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    // throw 'error';
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}
/*
function getBanana() {
    return delay(3000)
    .then(() => 'Banana');
}
*/

async function pickFruits() {
    /* 병렬
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    */

    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
/*
function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    });
}
*/
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
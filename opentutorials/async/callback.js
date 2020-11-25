'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
// setTimeout(() => console.log('2'), 1000);
console.log('3');

// 모든 함수는 hoisting으로 맨 위에 올라감
// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// printWithDelay(() => console.log('async hello'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'hyunjin' && password === 'hyunjin') ||
                (id === 'guest' && password === 'guest')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'hyunjin') {
                onSuccess({ name: 'hyunjin', role: 'admin'});
            } else {
                onError(new Error('access denied'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {console.log(error)}
)
## The onFulfilled and onRejected Functions
---
`"successful"` promise 또는 `"resolved"` promise를 처리하기 위해, `.then()`을 `promise`에서 호출하여, `success handler` 콜백 함수를 전달해요.
<br>
<br>

```javascript
const prom = new Promise((resolve, reject) => {
  resolve("Yay!");
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

prom.then(handleSuccess); // Prints "Yay!"
```

자, 예시 코드에서는 어떤 일이 일어날까요?

- `prom`은 `"Yay!"`로 resolve 한 `promise`예요.

- 전달받은 인자를 출력하는 `handleSuccess()` 함수를 정의했어요.

- `prom`에서 `handleSuccess()` 함수를 인자로 전달하는 `.then()` 메소드를 호출했어요.

- `prom`가 완료되고, `handleSuccess()`는 `prom`의 resolve value인 `"Yay!"`로 호출되므로, `Yay!`가 콘솔에 출력돼요.

<br>

전형적인 `promise consumption`인 경우, `promise`가 `resolve` 또는 `reject` 인지 알 수 없기 때문에 어느 경우에든 동작할 수 있는 로직을 제공해야 해요. `onFulfilled` 및 `onRejected`는 콜백을 `.then()`으로 전달할 수 있어요.

```javascript
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5) {
    resolve("Yay!");
  } else {
    reject("Ohhh noooo!");
  }
});

const handleSuccess = (resolvedValue) => console.log(resolvedValue);

const handleFailure = (rejectionReason) => console.log(rejectionReason);

prom.then(handleSuccess, handleFailure);
```

위 예시 코드는 어떤 일이 발생하는지 봅시다.

- `prom`은 `Yay!`와 함께 resolve를, 또는 `Ohhh noooo!`와 함께 reject를 랜덤하게 갖는 `promise`예요.

- `.then()` 메소드에 두 핸들러를 전달하면, `promise`가 `resolves`인 경우에는 `Yay!`를, `promise`가 `rejects`인 경우에는 `Ohhh noooo!`를 출력해요.
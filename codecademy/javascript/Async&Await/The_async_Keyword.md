## The async Keyword
---
`async` 키워드는 비동기 동작을 처리하는 함수를 작성할 때 사용해요. `async` 키워드를 앞에 작성한 함수에 비동기적 로직을 구현해요. 그 후 해당 함수를 실행하죠.

```javascript
async function myFunc() {
  // Function body here
};

myFunc();
```
<br>

`async` 함수를 선언할 때, `expressions`으로 선언할 수도 있어요!

```javascript
const myFunc = async () => {
  // Function body here
};

myFunc();
```
<br>

`async` 함수는 항상 `promise`를 반환해요. `async` 함수와 함께 `.then()`, `.catch()`와 같은 `promise` 구문을 사용할 수 있다는 뜻이죠.
<br>
<br>

- 만약 함수에서 반환되는 값이 없다면, `undefined` 값을 가진 `promise`를 반환해요.

- 함수에서 `non-promise` 값이 반환되면, 리졸브된 `promise`를 값으로 반환해요.

- 만약 함수에서 `promise`가 반환되면, 이것도 역시 간단하게 `promise`를 반환해요.

<br>

```javascript
async function fivePromise() {
  return 5;
}

fivePromise()
  .then(resolvedValue => console.log(resolvedValue));
// Prints 5
```

위 예시 함수에서 `5`를 반환하더라도, `fivePromise()`를 호출할 때, 실제로 반환되는 것은 `5`의 리졸브된 값을 가진 `promise`예요.
<br>
<br>

---
또 다른 예시
```javascript
const withAsync = async (num) => {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
};

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
```
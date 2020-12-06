## Constructing a Promise Object
---
`Promise`를 생성해 봅시다! 새 `Promise` 객체를 생성하려면 `new` 키워드와 `Promise constructor method`를 사용해야 해요.
<br>
<br>

```javascript
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

`Promise constructor method`는 생성자가 호출될 때 자동으로 실행되는 `executor function`이라는 함수 파라미터를 취해요. `Executor function`은 일반적으로 비동기 운영을 시작하고, `Promise`의 해결 방법을 지시하죠.
<br>
<br>

`Executor function`에는 보통 `resolve()`와 `reject()` 함수로 불리는 두 가지 함수 파라미터가 있어요. `resolve()`와 `reject()` 함수는 프로그래머에 의해 정의되는게 아니에요. `Promise` 생성자가 실행되면, javascript는 자체적으로 `resolve()`와 `reject()` 함수를 `excutor function`으로 전달해요.

- `resolve`는 하나의 인자가 있는 함수예요. 실행될 경우, `resolve()`는 `promise`의 상태를 `pending`에서 `fulfilled`로 변경하고, `promise`의 리졸브 값은 `resolve()`에 인자로 전달돼요.

- `reject`는 작업의 에러 또는 이유를 인자로 받는 함수예요. 실행될 때, `reject()`는 `promise`의 상태를 `pending`에서 `rejected`로 변경하고, `promise`의 실패 이유에 대한 값을 `reject()`에 인자로 전달해요.

<br>

`Promise constructor`의 예시 `executor function`를 확인해 봐요!

```javascript
const executorFunction = (resolve, reject) => {
  if (someCondition) {
    resolve("I resolved!");
  } else {
    reject("I rejected!");
  }
}

const myFirstPromise = new Promise(executorFunction);
```

위 코드에서 어떤 일이 발생할까요?

- `myFirstPromise` 변수를 선언했어요.

- `myFirstPromise`는 `Promise constructor` 인 `new Promise()`를 사용하여 구성됐어요.

- `executorFunction`은 생성자에게 전달되며, 매개변수로 `resolve`와 `reject` 함수를 가집니다.

- 만약 `someCondition` 조건에서 `true`로 판단될 때, `"I resolved"` 문자열을 인자로 갖는 `resolve()`를 호출해요.

- 그렇지 않다면, `"I rejected"` 문자열을 인자로 갖는 `reject()`를 호출해요.

<br>

예시에서, `myFirstPromise`는 단순한 조건에 따라 `resolve` 또는 `reject` 되지만, 실제로는 `Promise`가 비동기식 운영의 결과에 따라 설정돼요. 예를 들어, 데이터베이스 요청은 쿼리의 데이터로 `fulfill` 하거나, 오류를 발생시켜 `reject` 할 수도 있죠.
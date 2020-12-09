## Handling Dependent Promises
---
`async...await`의 진정한 멋은 서로 의존하는 일련의 비동기적인 작업이 있을 때죠! 예를 들어, 우리가 데이터베이스에 대한 쿼리를 기반으로 네트워크 요청을 해야할 수 있어요. 그 경우, 데이터베이스에서 결과가 나올 때까지 네트워크 요청을 해야 할 것입니다. `promise` 구문에서는 아래처럼, `.then()` 함수의 체인을 사용하여 각 함수를 옳게 반환했죠.

```javascript
const nativePromiseVersion = () => {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
};
```

`nativePromiseVersion()` 함수에서 일어나는 일이 무엇일까요?

- 함수 내에서 `promise`를 반환하는 두 가지 함수가 있어요.
<br>
`returnsFirstPromise()`, `returnsSecondPromise()`

- `returnsFirstPromise()` 함수를 호출하고, `.then()`을 사용하여 첫 번째 `promise` 작업이 완료되었는지 확인해요.

- 첫 번째 `.then()`의 콜백에는 첫 번째 `promise`의 리졸브된 값인 `firstValue`를 로깅한 다음, `secondPromise(firstValue)`를 반환해요.

- 또 다른 `.then()`을 이용하여 두 번째 `promise`의 리졸브된 값을 콘솔에 출력해요.

<br>

위 과정과 동일한 작업을 하는 `async` 함수는 아래와 같아요.

```javascript
const asyncAwaitVersion = async () => {
  const firstValue = await returnsFirstPromise();
  console.log(firstValue);
  const secondValue = await returnsSecondPromise();
  console.log(secondValue);
};
```

위 `async` 함수는 어떤 동작을 할까요?

- `async` 함수를 만들었어요.

- 함수 내부에서 `firstValue`라는 이름의 변수를 만들고, `await returnsFirstPromise()`를 할당했어요. 이는 `firstValue`에 `awaited promise`의 리졸브된 값이 할당된다는 의미죠.

- `firstValue`를 콘솔에 출력해요.

- 그 다음, `secondValue`라는 이름의 변수에 `await returnsSecondPromise(firstValue)`를 할당했어요. `secondValue`에는 해당 `promise`의 리졸브 값을 할당한다는 것이죠.

- 마지막으로, 콘솔에 `secondValue`를 로깅해요.

<br>

`async...await` 구문을 사용하면, 타이핑을 절약할 수 있지만, 라인 수 감소가 요점은 아니에요. 두 가지 버전의 함수를 고려할 때 `async...await` 구문은 동기식 코드와 흡사하게 생겨 개발자가 코드를 유지, 디버깅할 수 있도록 도와주죠. `async...await` 구문은 체이닝된 `promise`에서 리졸브된 값을 쉽게 저장하고, 참조할 수 있도록 해줘요. 이것은 원래 `promise` 구문에서는 엄청 어려운 작업이에요.
## The Node setTimeout() Function
---
`Promise`를 구성하는 방법을 아는 것은 유용하지만, 대부분의 경우 `Promise`를 사용하는 법을 아는 것이 해결책이 될 것이에요. `Promise`를 구성하기보다 비동기식 작업의 결과로 반환되는 `Promise` 객체를 처리하세요. `Promise`는 `pending`으로 시작되겠지만, 결국에는 완료될 것이에요.
<br>
<br>

얼마 간의 시간이 지난 후에 완료된 `Promise`를 반환하는 함수를 통해 시뮬레이션할 것이에요. 이를 위해 `setTimeout()`을 사용할 것입니다. `.setTimeout()`은 콜백 함수를 사용하여 지연 후 수행할 작업을 스케줄링하는 `Node API`(웹 브라우저에서도 비슷한 API가 제공됨)랍니다. `.setTimeout()`에는 콜백 함수와 ms의 지연이라는 두 파라미터가 있죠.
<br>
<br>

```javascript
const deplayedHello = () => {
  console.log("Hi! This is an asynchronous greeting!");
};

setTimeout(delayedHello, 2000);
```

여기서, 콜백 함수인 `delayedHello`와 `2000`으로 `setTimeout()`을 호출했어요. 이제 적어도 2초 뒤에 `deplayedHello()`가 호출됩니다! 그런데, 왜 정확히 2초가 아니라, 적어도 2초일까요?
<br>
<br>

해당 지연은 비동기적으로 수행돼요. 나머지 프로그램은 지연 중에 실행을 중지하지 않을 거예요. 비동기 자바스크립트는 이벤트 루프라는 것을 사용해요. 2초 후 `delayedHello()`는 실행 대기 중인 코드에 추가될 겁니다. 다음으로, 실행되기 전에 프로그램의 모든 동기식 코드가 실행돼요. `delayHello()` 함수가 실제로 수행되기 까지 2초 이상 늦어질 수 있다는 말이죠.
<br>
<br>

`setTimeout()`을 이용하여 비동기 `promise`를 구성하는 방법을 살펴볼게요!

```javascript
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve("I resolved!")}, 1000);
  });
};

const prom = returnPromiseFunction();
```

위 예시 코드에서, `promise`를 반환하는 `returnPromiseFunction()` 함수를 호출했어요. 반환된 `promise`는 `prom`이라는 변수에 할당돼요. 프로덕션에서 마주칠 수 있는 비동기적 `Promise`와 유사하게, `prom`은 처음에 `pending` 상태가 됩니다.
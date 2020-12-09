## Handling Independent Promises
---
`async` 함수의 실행을 중지하기 위한 `await`를 기억하세요. 이것은 의존적인 `promise`를 처리하기 위해 동기식 코드 스타일로 편리하게 쓸 수 있게 해줘요. 하지만 `async` 함수에서 서로 실행해야 할 결과에 의존하지 않는 여러 `promise`가 포함되어 있다면 어떨까요?
<br>
<br>

```javascript
const waiting = async () => {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
};

const concurrent = async () => {
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
  console.log(await firstPromise, await secondPromise);
}
```

`waiting()` 함수는 첫 번째 `promise`가 완료될 때까지 함수를 중지한 다음 두 번째 `promise`를 구성해요. 해당 작업이 완료되면, 확인된 값 모두 콘솔에 출력합니다.
<br>
<br>

`concurrent()` 함수에서는 두 `promise` 모두 `await` 없이 사용됐어요. 그리고 나서 그것들을 콘솔에 출력하기 위해 각 `promise`의 완료를 기다리죠.
<br>
<br>

`concurrent()` 함수로 두 `promise`의 비동기적 운영이 동시에 실행될 수 있다는 것을 알았어요. 가능한 빨리 비동기식 작업을 시작하고 싶다면, `async` 함수 내에서 동시에 비동기 작업을 수행할 수 있도록 동시성을 이용해야 해요.
<br>
<br>

참고로, 만약 완전 병렬로 실행하기를 원하는 독립적인 `promise`가 여러 개 있다면, 개별로 `.then()`을 이용해야 하며, 함수 실행을 중단하는 `await` 사용을 피해야 해요.
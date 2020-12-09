## Await Promise.all()
---
동시에 실행할 수 있는 여러 `promise`가 있을 때 동시성을 활용하는 또 다른 방법은 `Promise.all()`로 `await`를 사용하는 방법이에요.
<br>
<br>

일련의 `promise`를 `Promise.all()`에게 넘겨줄 수 있고, 그것은 하나의 `promise`를 반환해요. 해당 `promise`는 인자 배열의 모든 `promise` 작업이 완료되면, 해결돼요. 해당 `promise`의 값은 인자 배열에서 각 `promise`의 리졸브된 값을 포함하는 배열이에요.
<br>
<br>

```javascript
const asyncPromAll() => async () => {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3()]);
  resultArray.forEach(result => console.log(result))
}
```

위 예에서, 우리는 `Promise.all()`의 리졸브를 기다려요. `Promise.all()`은 세 가지 `promise`를 포함하는 인자 배열과 함께 실행돼요. 다음으로, `resultArray` 길이만큼 반복하여 각 요소를 콘솔에 출력하죠. `resultArray`의 첫 번째 요소는 `asyncTask1() promise`의 리졸브 값이고, 두 번째, 세 번째로 이어지죠.
<br>
<br>

`Promise.all()`은 우리가 비동기성을 활용할 수 있도록 해줘요. 즉, 세 가지 비동기 작업을 동시에 처리할 수 있죠. `Promise.all()`도 빠르게 실패할 수 있다는 점이 있는데, 한 번 `reject`되면 나머지 비동기 작업은 기다리지도 않는 것을 의미해요. 배열의 첫 번째 `promise`가 거부되는 즉시 `Promise.all()`에서 반환되는 `promise`는 `reject`일 것입니다. 기존 `promise`로 작업할 때 그랬던 것처럼, 여러 개의 비동기 작업이 모두 필요한 경우 `Promise.all()`은 좋은 선택이지만, 실행 전에 다른 작업을 기다려서는 안돼요.
## Chaining Multiple Promises
---
비동기 프로그래밍을 통해 보게 될 한 가지 일반적인 패턴은 실행하기 위해 서로 의존하거나 특정한 순서로 실행되어야 하는 다중 작업이에요. 우리는 데이터베이스에 한 가지 요청을 하고, 반환된 데이터를 사용하여 다른 요청 등을 수행할 수 있죠! 세탁을 예로 들어볼게요.
<br>
<br>

우리는 더러운 옷을 가지고 세탁기에 넣어요. 만약 옷이 깨끗하다면, 우리는 그것들을 건조기에 넣고 싶을 거예요. 건조기가 가동된 후 옷이 건조하면 접어서 치울 수도 있죠.
<br>
<br>

`Promises`를 계속해서 맺는 과정을 `composition`이라고 합니다. `Promises`는 `composition`을 염두에 두고 설계되죠.
<br>
<br>

```javascript
firstPromiseFunction()
  .then(firstResolveVal => secondPromiseFunction(firstResolveVal))
  .then(secondResolveVal => console.log(secondResolveVal));
```

어떤 일이 일어나는지 확인해 봅시다!

- 먼저 `promise`를 반환하는 함수인 `firstPromiseFunction`을 호출해요.

- 성공 핸들러 내부에서는 두 번째 함수인 `secondPromiseFunction()`을 첫 번째 프로미스의 값으로 호출해 새로운 `promise`를 반환해요.

- 다음 `.then()` 안에는 두 번째 프로미스에서 나온 결과 값을 콘솔에 기록할 성공 핸들러가 있어요.

<br>

체인이 제대로 동작하기 위해서는 `secondPromiseFunction(firstResolveVal)`에서 `promise`를 제대로 반환해야 해요. 그럼으로써 처음 `.then()`의 반환되는 값은 새로운 `promise`의 디폴트 반환이 아닌, 두 번째 `promise`를 위함이라는 것을 알았어요.
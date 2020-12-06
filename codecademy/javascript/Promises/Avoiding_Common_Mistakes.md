## Avoiding Common Mistakes
---
`Promise composition`은 중첩된 콜백 구문보다 훨씬 더 읽기 쉬운 코드를 허용해요. 하지만, 실수하는 것은 여전히 쉬울 수 있죠. 이번에는, `promise`를 사용하면서 발생하는 실수 두 가지를 짚어볼 거예요.
<br>
<br>

`첫 번째 실수`: `promises`에 체이닝을 내포하는 것

```javascript
returnsFirstPromise()
  .then(firstResolveVal => {
    return returnsSecondValue(firstResolveVal)
    .then(secondResolveVal => console.log(secondResolveVal))
  })
```

어떤 일이 일어났는지 정리해봐요.

- `Promise`를 반환하는 `returnsFirstPromise()` 함수를 호출해요.

- 성공 핸들러와 함께 `.then()`을 호출해요.

- 성공 핸들러 내부에서, `firstResolveVal`으로 `returnsSecondValue()`를 호출하여 새로운 `promise`를 반환해요.

- 첫 번째 `promise`에 대한 로직을 다루기 위해 두 번째 `.then()`을 호출해요.

- 두 번째 `.then()`에서, `promise()`의 완료 값을 콘솔에 기록하는 성공 핸들러가 있어요.

<br>

우리는 깔끔한 `promise`의 체인을 가지기 보다는 다른 `promise`의 로직 안에 하나를 위한 로직을 중첩했어요. 이런..!
<br>
<br>

`두 번째 실수`: `promise` 반환을 깜빡한 경우

```javascript
returnsFirstPromise()
  .then((firstResolveVal) => {
    returnsSecondValue(firstResolveVal)
  })
  .then((someVal) => {
    console.log(someVal);
  })
```

어떤 일이 일어났는지 정리해봐요.

- `promise`를 반환하는 `returnsFirstPromise()`를 호출해요.

- 성공 핸들러와 함께 `.then()`을 호출해요.

- 성공 핸들러 안에서 두 번째 `promise`를 만들지만, 반환하는 것을 잊었어요!

- 그 다음 두 번째 `.then()`을 호출해요. 두 번째 `promise`의 로직을 다루는데, 반환한 값이 없으므로 `.then()`이 원래 `promise`와 동일한 값을 완료한 `promise`에 대해 호출돼요.

<br>

사실, 값을 반환하는 것을 잊는 것은 이해가 되지 않을 수 있답니다...
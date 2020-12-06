## Using Promise.all()
---
올바르게 수행되면, `promise composition`은 비동기 운영이 서로 의존하거나 실행 순서가 중요한 상황을 처리할 수 있는 훌륭한 방법이죠. 여러 가지 약속을 처리하면서도 순서는 신경 안쓴다면? 청소의 관점에서 예를 들어 볼게요.
<br>
<br>

우리가 집을 깨끗하게 하기 위해서는 옷을 말리고, 쓰레기통을 비우고, 식기 세척기를 킬 필요가 있어요. 우리는 이 모든 작업을 완료해야 하지만 특별한 순서가 없죠. 게다가, 그들은 모두 비동기적으로 행해지고 있기 때문에, 작업들은 동시에 일어나야 해요!
<br>
<br>

효율성을 극대화하기 위해서는 여러 비동기식 연산이 함께 일어나는 동시성을 사용해야 해요. `Promise`를 갖고 우리는 `Promise.all()` 함수로 이것을 할 수 있죠.
<br>
<br>

`Promise.all()`은 일련의 `promise`를 `arguments`로 받아들이고, 하나의 `promise`를 반환해요. 그 한 가지 `promise`는 두 가지 방법 중 하나로 될 거예요.

- 배열인 인자의 모든 `promise`가 완료되면, `Promise.all()`에서 반환된 단일 `promise`는 배열인 인자의 각 `promise` 결과 값을 포함하는 배열로 리졸브됩니다.

- 배열인 인자에서 나온 `promise`가 `rejects` 된다면, `Promise.all()`에서 반환된 단일 `promise`는 거부됐다는 이유로 즉시 `rejects` 됩니다. 이런 행동을 때론, `failing fast`라고 불러요.

<br>

```javascript
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

위 예시 코드에서 어떤 일이 일어날까요?

- `Promise.all()`을 호출하여 선언한 `myPromises`에 할당했어요.

- 세 가지 `promise`의 배열로 `Promise.all()`을 호출했어요. 함수에서 반환된 값이죠.

- 각 `promise`가 성공적으로 완료되면, 결과 값의 배열을 출력할 성공 핸들러로 `.then()`를 호출해요.

- 어떤 `promise`라도 `rejects`가 된다면, 첫 번째 `rejection message`를 출력하는 실패 핸들러로 `.catch()`를 호출해요.
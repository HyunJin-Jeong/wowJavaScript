## Using catch() with Promises
---
더 깔끔한 코드를 쓰는 한 가지 방법은 `separation of concerns`라는 원칙을 따르는 것이에요. `Separation of concerns`는 코드를 각각의 특정 작업으로 취급하는 개별 섹션으로서 구성하는 것을 의미해요. 그것은 코드를 빠르게 탐색할 수 있게 해주며, 어떤 것이 작동하지 않는지 어디서 찾아야 하는지 알 수 있게 해줘요.
<br>
<br>

`.then()`은 적절한 핸들러가 제공되지 않은 경우 호출한 `promise`와 동일하게 완료된 값을 가진 `promise`를 반환한다는 것을 기억하세요. 해당 구현을 통해 `resolved`와 `rejected`에 대한 로직을 분리할 수 있어요. 두 핸들러를 하나의 `.then()`으로 전달하는 대신에, 두 번째 `.then()`과 `failure handler`를 첫 번째 `.then()`과 연결시킬 수 있고, 두 가지 경우는 모두 처리가 될 겁니다.
<br>
<br>

```javascript
prom
  .then(resolvedValue => console.log(resolvedValue);)
  .then(null, (rejectionReason) => console.log(rejectionReason););
```

자바스크립트는 공백에 개의치 않기 때문에, 우리가 읽기 쉽도록 각 체인을 들여쓰기했어요. 그리고, 더 읽기 쉬운 코드를 만들기 위해 `promise`의 함수인 `.catch()`를 사용할 수 있어요.
<br>
<br>

`.catch()`는 `onRejected`라는 하나의 인자만 사용해요. `rejected promise`의 경우, `failure handler`는 실패에 대한 이유를 갖고 호출될 것이죠. `.catch()`를 사용하면, `failure handler`를 사용한 `.then()`과 같은 작업을 할 수 있어요.
<br>
<br>

```javascript
prom
  .then(resolvedValue => console.log(resolvedValue))
  .catch(rejectionReason => console.log(rejectionReason));
```

위 예시 코드에서는 어떤 일이 발생할까요?

- `prom`은 랜덤하게 resolved 발생 시 `Yay!`, rejected 발생 시  `Ohhh noooo!`를 갖는 `promise`예요.

- `success handler`는 `.then()`을 통해, `failure handler`는 `.catch()`를 통해 전달돼요.

- 만약, `promise resolves`가 되면, `.then()`의 성공 핸들러는 `Yay!`와 함께 호출돼요.

- 만약, `promise rejects`가 되면, `.catch()`는 원래 `promise`와 동일한 `rejection reason`을 가진 `promise`를 반환하고, `.catch()`의 실패 핸들러는 `rejection reason`과 함께 호출돼요.
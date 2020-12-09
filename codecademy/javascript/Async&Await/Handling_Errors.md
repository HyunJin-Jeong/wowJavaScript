## Handling Errors
---
`.catch()`를 `promise` 체인과 함께 사용하면, 오류가 던져진 체인의 위치를 알 수 없어요. 이것은 디버깅을 어렵게 만들죠.
<br>
<br>

`async...await`의 에러 핸들링 구문으로는 `try...catch`를 사용해요. 해당 구문을 사용함으로써 동기 코드와 같은 방식으로 오류를 처리할 수 있을 뿐만 아니라 동기식 오류와 비동기식 오류 모두 잡을 수 있어요. 이렇게되면 디버깅은 당연히 쉬워지죠!
<br>
<br>

```javascript
usingTryCatch = async () => {
  try {
    const resolveValue = await asyncFunction("Thing that will fail");
    const secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    console.log(err);
  }
};

usingTryCatch();
```

`async` 함수는 `promise`를 반환하므로 `async` 함수와 함께 기존 `promise`의 `.catch()`를 사용할 수도 있다는 것을 기억하세요.

```javascript
const usingPromiseCatch = async () => {
  const resolveValue = await asyncFunction("Thing that will fail");
};

const rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => console.log(rejectValue));
```

위 구문은 복잡한 코드의 최종 오류를 잡기 위해 글로벌 스코프에서 사용되기도 해요.
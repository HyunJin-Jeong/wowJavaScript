## The await Operator
---
방금 전에, `async` 키워드에 대해서 학습했어요. 그 자체로는 사실 별로 효과가 없죠. `async` 함수는 내부에서 거의 `await` 키워드와 함께 사용돼요.
<br>
<br>

`await` 키워드는 오로지 `async` 함수 내부에서만 사용해요. `await`는 연산자이며, `promise`에서 리졸브 된 값을 반환해요. `promise`는 불확실한 시간 안에 완료되기 때문에, `await`는 주어진 `promise`가 해결될 때까지 `async` 함수의 실행을 중지해요.
<br>
<br>

대부분의 상황에서, 우리는 함수에서 반환된 `promise`를 다루죠. 일반적으로, 이런 기능들은 라이브러리를 통해 이루어집니다. `async` 함수 안에서 반환되는 `promise`의 작업 완료를 위해 `await` 할 수 있어요.
<br>
<br>

아래 예시에서, `myPromise()`는 `"I am Resolved now!"`라는 문자열로 리졸브 `promise`를 반환하는 함수예요.

```javascript
const asyncFunction = async () => {
  let resolvedValue = await myPromise();
  console.log(resolvedValue)
};

asyncFunction();
// Prints "I am resolved now!"
```
<br>

`async` 함수인 `asyncFunction()` 내에서 `myPromise()` 함수의 작업이 완료될 때까지 실행을 중지하고, 리졸브된 값을 변수 `resolvedValue`에 할당하기 위해 `await`를 사용했어요. 그 후 콘솔에 `resolvedValue`를 로깅해요.
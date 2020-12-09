## Writing async Functions
---
우리는 `await` 키워드로 `promise`가 더 이상 `pending` 상태로 남지 않게 `async` 함수의 실행을 중지하는 것을 봤어요. `await`를 절대 잊지마세요! 그것은 분명할 수도 있지만, 우리 함수는 계속 실행될 것이기 때문에 잡기 어려운 실수일 수 있어요. 원하는 결과를 얻지 못할 것이죠.
<br>
<br>

아래 함수를 이용하여 확인해 볼게요. 해당 함수는 `1초` 지연 후 `"Yay, I resolve!"`로 리졸브하는 `promise`를 되돌려주죠.

```javascript
const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Yay, I resolved!"), 1000);
  });
};
```
<br>

그리고 위 함수를 호출하는 두 개의 `async` 함수를 만들게요.

```javascript
const noAwait = async () => {
  let value = myPromise();
  console.log(value);
};

const yesAwait = async () => {
  let value = await myPromise();
  console.log(value);
};

noAwait(); // Prints Promise { <pendig> }
yesAwat(); // Prints "Yay, I resolved!"
```
<br>

일단, 첫 번째 `async` 함수인 `noAwait()`는 `myPromise()` 함수를 호출할 때, `await` 키워드를 사용하지 않았어요. 그리고, 두 번째 `async` 함수인 `yesAwait()`는 `await`를 포함시켰죠. `noAwait()` 함수는 콘솔에 `Promise { <pending> }`이라는 문구가 출력됐어요. `await` 키워드가 없으면 함수의 실행이 중지되지 않아 `console.log()`가 `promise` 작업이 완료되기 전에 실행되었죠.
<br>
<br>

`await operator`는 리졸브된 `promise`를 반환한다는 것을 기억하세요. `yesAwait()`에서 적절하게 사용했을 때 변수 값에 `myPromise() promise`의 리졸브된 값이 할당되었고, `noAwait()`에서는 `promise object`가 할당되었어요.
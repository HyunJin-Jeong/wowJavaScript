## Functions as Parameters
---
함수는 Javascript의 다른 데이터 타입과 같이 동작할 수 있기 때문에, 함수를 매개 변수로 전달할 수 있다는 것을 알 수 있어요. `higher-order function`은 함수를 파라미터로 받아들이거나, 함수를 반환하거나 둘 다 할 수도 있는 함수예요! `higher-order function`은 실행 중에 `callback` 함수가 호출되기 때문에 전달되는 함수를 매개변수로 부르고 `callback` 함수를 호출해요.
<br>
<br>

함수를 다른 함수에 인수로 전달할 때, 함수를 호출하지 않아요. 함수를 호출하면, 함수 호출의 반환 값으로 판단돼요. `callback`을 사용하면, 괄호 없이 함수 이름을 입력하여 함수 자체를 전달합니다.
<br>
<br>

```javascript
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);
```
<br>

`timeFuncRuntime() higher-order function`을 작성했어요. 함수를 인자로 취하고, 시작 시간을 아끼며, 콜백 함수를 호출하고, 함수를 호출한 후의 시간을 기록하고, 종료 시간에서 시작 시간을 빼서 함수의 실행 시간을 되돌립니다.
<br>
<br>

이 `higher-order function`은 잠재적으로 강력한 코드를 만드는 콜백 기능과 함께 사용될 수 있어요.
<br>
<br>

```javascript
timeFuncRuntime(() => {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
});
```
위 예시는 10부터 거꾸로 계산하는 `anonymous function`으로 `timeFuncRuntime()`를 호출했어요. `Anonymous functions`도 인자가 될 수 있어요.
## Arrow Functions
---
ES6에 도입된 `arrow function`입니다. `() ->` 표기법을 사용해 함수를 더 짧게 쓸 수 있는 구문이죠.
<br>
<br>

`Arrow functions`은 함수를 만들 때마다 `function`이라는 키워드를 입력하지 않아도 돼요. 대신 `()` 안에 `parameters`를 넣은 다음에 중괄호`{}`로 둘러싸인 함수 본문을 가리키는 `=>`를 추가해요.
```javascript
const rectangleArea = (width, height) => {
    return width * height;
}
```
<br>

Javascript 코드를 읽을 때 이러한 각각의 기능들을 접하게 되기 때문에 다양한 함수 작성 방법들을 보는 것도 좋은 방법이에요.
<br>
<br>

## Concise Body Arrow Functions
---
Javascript에서 `arrow function`을 사용할 때, 제공하는 여러 방법이 있어요. 제일 간단한 것은 `concise body` 방법이에요.
<br>
<br>

첫 번쨰로, 단일 매개변수만 사용하는 함수는 괄호 안에 해당 매개변수를 포함시킬 필요가 없어요. 그러나 매개변수가 없거나, 여럿일 경우에는 괄호가 필요해요.
```javascript
// ZERO Parameters
const functionName = () => {};

// ONE Parameters
const functionName = paramOne => {};

// TWO OR MORE Parameters
const functionName = (paramOne, paramTwo) => {};
```
<br>

두 번째로, 한 줄로 된 코드를 실행하고 싶다면, 중괄호를 사용하지 않아도 됩니다. 그 줄에서 리턴하고자 하는 것은 자동으로 리턴될 것이에요. 이때, `return` 또한 제거할 수 있어요. 이것을 `implicit return`이라고 부릅니다.

```javascript
// SINGLE-LINE Block
const sumNumbers = number => number + number;

// MULTI-LINE Block
const sumNumbers = number => {
    const sum = number + number;
    return sum;
};
```

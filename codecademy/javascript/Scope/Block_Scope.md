## Block Scope
---
다음 다룰 내용은 `block scope`입니다. 변수가 내부 블록에 정의된 경우, 해당 변수는 중괄호 내의 코드에서만 접근이 가능해요. 그렇기 때문에 이것을 `block scope`를 가지고 있다고 부르죠.
<br>
<br>

`Block scope`와 함께 선언되는 변수는 동일한 블록의 일부인 코드에만 사용할 수 있기 때문에 `local variable`이라고 부르기도 해요.
```javascript
const logSkyColor = () => {
    let color = "blue";
    console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue"
console.log(color); // ReferenceError
```
확인해 보세요.
- `logSkyColor()`를 선언했어요.

- 함수와 함께 중괄호 내에 `color` 변수를 선언했어요.

- 만약, 함수 외부에서 `color`를 참조하려 한다면, `ReferenceError`가 발생할 것입니다.
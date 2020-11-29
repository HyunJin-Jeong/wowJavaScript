## Default Parameters
---
ES6 버전에서 추가된 기능 중 하나인 `default parameters`를 사용할 수 있는 기능이다. `Default parameters`는 함수에 전달된 `arguments`가 없거나 호출될 때 `arguments`가 정의되지 않은 경우 `Parameters`에 미리 결정된 값을 가질 수 있도록 해요.
```javascript
function greeting (name = "stranger") {
    console.log(`Hello, ${name}!`);
}

greeting("Hyunjin"); // Prints "Hello, Hyunjin!"
greeting(); // Prints "Hello, stranger!"
```
- 위 예시에서, `name`이라는 `parameter`에 `=` 연산자를 이용해서 `"stranger"`라는 값을 할당했어요. 이것은 개인화되지 않은 기본 인사말을 포함하는 경우 유용해요!

- `greeting("Hyunjin")`을 호출하면 `argument`가 전달되고, `"Hyunjin"`이라는 값은 콘솔에 `"Hello, Hyunjin"`을 출력하기 위해 `"stranger"`의 `default parameters`를 재정의해요.

- `Arguments`를 입력하지 않고 함수를 호출하면, 기본값인 `"stranger"`가 사용되어 콘솔에 `"Hello, stranger"`가 출력되죠.

<br>

`Default Parameters`를 사용함으로써 `arguments`가 함수에 전달되지 않는 상황까지 케어할 수 있게 됐어요.
## Function Declarations
---
자바스크립트에서, 함수를 만드는 방법이 여러가지 있어요. 함수를 만드는 한 방법은 함수 선언을 이용하는 것이죠. 변수 선언이 값을 변수명에 바인딩하는 것처럼 함수 선언은 함수를 이름이나 식별자에 바인딩해요.
```javascript
function greetWorld() {
    console.log("Hello, world!");
}
```
함수 선언은 아래와 같이 구성되어 있어요.
- 키워드: `function`
- 함수의 이름 또는 식별자와 뒤에 오는 괄호`()`
- 함수의 본문, 또는 작업을 수행하는 코드는 중괄호`{}` 안에 있어요.

<br>

함수 선언은 함수를 식별자 또는 함수명에 바인딩해요. 그리고 아래는 함수 본문 내부의 코드를 실행하는 방법입니다.
```javascript
console.log(greetWorld()); // Prints "Hello, world!"

function greetWorld() {
    console.log("Hello, World!");
}
```
`greetWorld()` 함수를 호출했어요! 함수보다 위에서 호출했음에도 동작하는 이유는 `hoisting` 떄문이죠. 하지만 잘 사용하지 않는 것이 좋아요. 좋은 습관은 아니기 때문이죠.

`hoisting`에 대해서 더 알고 싶다면 [이 문서](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)를 참고하세요!
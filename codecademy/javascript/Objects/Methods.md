## Methods
---
객체에 저장된 데이터가 함수일 때, 우리는 그걸 메소드라고 불러요. 속성은 객체가 가진 것이고, 메소드는 객체가 하는 것이죠.
<br>
<br>

객체의 메소드가 익숙해 보이나요? 왜냐하면 우리는 많이 사용했기 때문이죠. 예를들어, `console`은 글로벌한 자바스크립트 객체이고, `log()`는 객체의 메소드예요. `Math`도 마찬가지로 글로벌 자바스크립트 객체이고 `.floor()`는 그것의 메소드죠.
<br>
<br>

쉼표로 구분된 일반적인 `key-value` 쌍을 만들어 객체 리터럴에 메소드를 포함할 수 있어요. `key`는 메소드의 이름이고, `value`는 `anonymous function expression`입니다.

```javascript
const alienShip = {
  invade: function () {
    console.log("Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.")
  },
};
```
<br>

ES6에서 새 메소드를 만드는 구문을 소개했어요. 콜론과 함수 키워드를 생각할 수 있답니다.

```javascript
const alienShip = {
  invade () {
    console.log("Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.")
  },
};
```
<br>

객체 메소드는 객체의 이름을 `dot` 연산자와 함께 메소드 이름과 괄호를 추가하여 호출해요.

```javascript
alienShip.invade();
// Prints "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
```
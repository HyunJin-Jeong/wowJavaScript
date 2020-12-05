## Creating Object Literals
---
`Objects`는 모든 자바스크립트 타입처럼 변수를 할당할 수 있어요. 객체를 지정하기 위해 중괄호`{}`를 사용하죠.

```javascript
let spaceship = {};
// spaceship is an empty object
```
<br>

우리는 순서가 없는 데이터와 함께 객체를 채웁니다. 그 데이터는 `key-value` 쌍으로 구성되어 있어요. `Key`는 `value`를 가진 메모리 위치를 가리키는 변수 이름과 같아요.
<br>
<br>

`Key`의 `value`는 함수나 다른 객체를 포함한 언어의 모든 데이터 타입일 수 있어요.
<br>
<br>

키의 이름, 즉 식별자를 쓰고 콜론 뒤에 값을 써서 `key-value` 쌍을 만들어요. 각 `key-value` 쌍인 객체 리터럴을 쉼표(`,`)로 구분하죠. `key`는 문자열이지만, 특별한 문자가 없는 `key`가 있을 때 자바스크립트는 따옴표(`'`)를 생각할 수 있게 해줘요.

```javascript
// An object literal with two key-value pairs
let spaceship = {
  "Fuel Type": "diesel",
  color: "silver",
};
```

`spaceship` 객체는 `Fuel Type`과 `color`라는 두 속성을 갖고 있어요. `"Fuel Type"`은 문자를 포함하고 있기 때문에 따옴표가 있어요.
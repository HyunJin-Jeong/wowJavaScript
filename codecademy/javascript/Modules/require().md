## require()
---
내보낸 모듈을 다른 파일에서 사용하고 싶을 때, `import`를 해야해요. Node.js에서 사용하는 `import` 모듈은 `require()` 함수예요.
<br>
<br>

예를 들어, 모듈이 `Menu`의 데이터와 동작을 제어하길 원하며, 주문을 처리할 별도의 파일을 원한다고 생각해봐요. 별도의 파일인 `order.js`를 생성하고 `require()`를 사용하여 `menu.js`에서 `order.js`로 `Menu` 모듈을 가져올 것이죠. `require()`는 원래 모듈 파일을 가리키는 파일 경로를 인자로 받아요.
<br>
<br>

```javascript
// order.js
const Menu = require("./menu.js");

function placeOrder() {
  console.log("My order is: " + Menu.specialty);
}

placeOrder();
```

이제, `Menu` 모듈의 모든 동작을 `order.js`에서 사용할 수 있어요.

1. `order.js`에서 모듈을 임포트할 때, `Menu` 모듈을 호출하는 `require()` 함수로 `const` 변수를 생성했어요. 그리고 해당 변수 이름을 `menuItems` 처럼, 원하는대로 사용할 수 있어요.

2. `require()`는 모듈을 불러오는 자바스크립트 함수예요. 인자로는 모듈이 있는 파일의 이름과 경로를 적죠. `.js`라는 확장자를 입력해도 되고, 안쓰면 `.js`를 적은 것처럼 판단할 겁니다!

3. `placeOrder()` 함수는 `Menu` 모듈을 사용해요. `Menu.specialty`를 호출함으로써 `Menu` 모듈의 `specialty` 속성에 접근했죠.

<br>

자세히 살펴보면 모듈을 가져오는 패턴은 다음과 같아요.

1. `require()`를 사용해 모듈을 가져와 로컬 변수에 할당해요.

2. 프로그램 내에 모듈 및 해당 속성을 사용해요.

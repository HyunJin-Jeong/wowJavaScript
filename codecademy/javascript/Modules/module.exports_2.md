## module.exports 2
---
어떤 객체에서 데이터와 함수의 모음을 감쌀 수 있고, `module.exports`를 사용하여 객체를 내보낼 수도 있죠. 다음과 같이요!

```javascript
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty () {
    return this.sepcialty;
  }
};
```

위 코드에서,

1. `module.exports`를 통해 모듈에 있는 객체를 내보냈어요.

2. `specialty`, `getSpecialty`는 객체의 속성이에요.

<br>

임포트는 역시 `require()`로 합니다!

```javascript
const Menu = require("./menu.js");

console.log(Menu.getSpecialty);
```
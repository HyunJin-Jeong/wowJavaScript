## export default
---
Node.js는 `require()`와 `module.exports`를 지원하지만, ES6에서 자바스크립트는 모듈을 내보내기 위한 보다 읽기 쉽고 유연한 구문을 새로 지원합니다. 이것은 보통 두 가지 기술 중 하나로 분해되는데, 바로 `default export`와 `named exports`랍니다!
<br>
<br>

첫 번째 구문인 `default exports`는 `module.exports` 구문과 유사하게 작동하여 파일당 하나의 모듈을 내보낼 수 있어요.
<br>
<br>

```javascript
let Menu = {};

export default Menu;
```

1. 자바스크립트의 `export` 문인 `export default`는 객체와 함수, 원시 타입을 내보낼 수 있어요.

2. `Menu`는 `Menu` 객체의 이름, 즉 모듈 내에서 속성을 설정하는 객체를 가리켜요. ES6 구문을 사용할 때, `module.exports` 대신 `export default`를 사용해요. Node.js는 `export default`를 지원하지 않기 때문에 `module.exports`는 Node.js 개발에, ES6 구문은 프론트엔드 개발에 주로 사용돼요. 
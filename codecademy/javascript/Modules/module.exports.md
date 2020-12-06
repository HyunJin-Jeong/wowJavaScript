## module.exports
---
한 파일에 모듈을 정의하고, Node.js의 `module.exports` 구문을 사용하면, 다른 파일에서 모듈을 사용할 수 있어요. 노드에서 실행되는 모든 Javascript 파일에는 파일에서 내보낼 항목을 정의하는 데 사용되는 `exports` 속성이 있는 로컬 모듈 객체가 있어요.
<br>
<br>

아래 예시는 `module.exports` 문으로 어떻게 모듈을 내보내는지 보여줘요.

```javascript
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
```

코드의 의미를 설명할게요.

- `let Menu = {};`를 통해서 모듈로 사용될 `Menu` 오브젝트를 만들었어요. `Menu`라는 빈 객체는 대문자 변수 이름을 가졌어요.

- `Menu.specialty`는 `Menu` 모듈의 속성을 정의해요. `Menu` 객체에 데이터를 추가하여 해당 객체에 속성을 설정하고, 속성에 대한 값을 부여했어요.

- `"Roasted Beet Burger with Mint Sauce";`는 `Menu.specialty` 속성에 저장된 값이랍니다.

- `module.exports = Menu;`를 통해 `Menu` 객체를 모듈로써 내보냈어요. `module`은 모듈을 표현하는 변수이며, `exports`는 모듈을 내보내죠.

<br>

모듈을 내보낼 때 사용하는 패턴은 다음과 같아요.

1. 모듈을 나타내는 객체를 생성해요.

2. 모듈 객체에 속성 또는 메소드를 추가해요.

3. `module.exports`를 사용하여 모듈을 내보내요.
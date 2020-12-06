## Constructor
---
이전에, `Dog` 클래스를 만들고, `Dog` 객체를 만드는 데에 사용했어요.
<br>
<br>

클래스 구문과 객체 구문의 유사함을 알 수 있지만, 이를 구분하는 중요한 메소드가 하나 있어요. 이를 `constructor method`라고 해요. 자바스크립트는 클래스의 새 인스턴스를 만들 때마다 `constructor()` 메소드를 호출해요.
<br>
<br>

```javascript
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

- `Dog`는 클래스의 이름이에요. 이름을 쓸 때, `CamelCase`에서 맨 앞 글자도 대문자로 작성하는 것이 관습이에요.

- 자바스크립트는 새로운 `Dog` 클래스의 인스턴스를 만들 때마다 `constructor()` 메소드를 호출할 것이에요.

- `constructor()` 메소드는 `name`이라는 하나의 인자를 허용해요.

- `constructor()` 메소드 안에서, `this` 키워드를 사용해요. 클래스의 컨텍스트에서 `this`는 해당 클래스의 인스턴스를 가리키죠. `Dog` 클래스는 이를 사용하여 `Dog` 인스턴스의 `name` 속성 값을 `name` 인자로 설정합니다.

- `this.name` 밑에는 `behavior`라고 불리는 속성을 만들어 개가 잘못된 행동을 하는 횟수를 트래킹해요. 해당 속성은 항상 0으로 초기화돼요.


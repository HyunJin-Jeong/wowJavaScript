## Instance
---
이제 클래스의 인스턴스를 생성할 준비가 되었어요. `instance`는 클래스의 메소드 또는 속성을 포함했지만, 고유한 속성 값을 가진 객체예요.
<br>
<br>

```javascript
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}

const halley = new Dog("Halley"); // Create new Dog instance

console.log(halley.name); // Prints "Halley"
```

위 예시에서 `Dog` 클래스 밑에 보면, `new`라는 키워드를 사용해서 `Dog` 클래스의 인스턴스를 만들었어요. 어떤 순서로 진행되는지 봅시다!

- `Dog` 클래스의 인스턴스를 저장하는 새로운 변수 `halley`를 만들었어요.

- `new` 키워드를 사용해서 `Dog` 클래스의 새로운 인스턴스를 생성했어요. `new` 키워드는 `constructor()`를 호출하고, 그 안의 코드를 실행해서 새로운 인스턴스를 반환해요!

- `"Halley"`라는 문자열을 `Dog constructor`에 전달해서, `name` 속성을 `Halley`로 설정했어요.

- 마지막으로, `halley` 객체의 값이 저장된 `name`을 출력했더니, `"Halley"`라는 값이 나왔어요!
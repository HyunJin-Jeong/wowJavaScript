## Methods
---
이 때, `name`과 `behavior`가 있는 객체와 함께 `Dog` 클래스를 갖고 있어요. 이제 `getter`를 추가할 겁니다!
<br>
<br>

클래스 메소드와 `getter` 구문은 메소드 사이에 쉼표를 포함할 수 없다는 점을 제외하면, 객체에 대한 것과 동일해요.
<br>
<br>

```javascript
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
<br>

위 예시에서, `name`과 `behavior`를 위한 `getter` 메소드를 추가했어요. 참고로, 속성에 직접 접근해서는 안 된다는 것을 나타내는 `_`를 속성 이름 앞에 추가했어요. `getter` 밑에는 `.incrementBehavior()` 메소드를 추가했고, `Dog` 인스턴스에서 `.incrementBehavior()`를 호출하면 `_behavior` 속성에 `1`이 추가돼요. 이 모든 과정에서 각 메소드 사이에 쉼표를 추가하지 않았어요.
## Inheritance 4
---
이제 부모 클래스에서 속성을 이어받는 것을 알게 됐으니, 메소드를 생각해 봅시다.
<br>
<br>

우리가 클래스를 선언하면서 `extends`를 호출할 때, 모든 부모 메소드는 자식 클래스에서 사용이 가능해요.
<br>
<br>

```javascript
class Animal {
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
 
 
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
 
const bryceCat = new Cat('Bryce', false);
```

위 예시에서, `Animal` 클래스를 상속받은 `Cat` 클래스가 있습니다. 결과적으로, `Cat` 클래스는 `Animal`의 `getter`와 `.incrementBehavior()` 메소드에 접근할 수 있답니다.
<br>
<br>

위 코드에서, `bryceCat`이라는 이름의 `Cat` 클래스 인스턴스를 만들고, `name getter`를 사용했을 때, `"Bryce"`가 출력이 돼요.

```javascript
console.log(bryceCat.name);
```
<br>

`extends` 키워드는 부모의 `getter` 및 메소드를 모두 자식 클래스로 불러오기 때문에 `bryceCat.name`은 해당 `getter`에 접근해 저장된 값을 `name` 속성에 반환하죠.

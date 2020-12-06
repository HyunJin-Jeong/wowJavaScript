## Inheritance 5
---
자식 클래스는 상속된 속성 외에도 자신의 속성과 `getter`, `setter` 그리고 메소드를 포함할 수 있어요.
<br>
<br>

아래의 코드에서 `usesLitter getter`를 추가했어요. 구문은 모든 클래스에서 생성하는 메소드, `getter`, `setter`와 같아요.

```javascript
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}
```

위 코드에서, `Cat` 클래스에 `usesLitter`라는 `getter`를 만들고, `_usesLitter`를 반환하도록 했어요.
<br>
<br>

위 클래스를 상속 없이 만든 `Cat` 클래스와 비교해 보세요.

```javascript
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
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

`Cat` 클래스를 만드는 데 필요한 라인 수를 약 절반으로 줄였어요. 겨우 `Cat` 클래스 하나 때문에 `Animal` 클래스를 만드는 것은 이상하지만, 하위 클래스의 수와 크기가 증가함에 따라 상속의 이점(시간 절약, 가동석, 효율성)은 증가해요.
<br>
<br>

한 가지 이점은 여러 클래스가 공유하는 메소드나 속성을 변경해야 할 때, 각 하위 클래스가 아닌 상위 클래스를 변경할 수 있다는 것이죠.
<br>
<br>

```javascript
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
```
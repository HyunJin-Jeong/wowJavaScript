## Inheritance 2
---
이전 학습에서, `Cat`과 `Dog` 자식 클래스를 위한 `Animal` 부모 클래스를 만들었죠.
<br>
<br>

`Animal` 클래스는 아래와 같이 `Cat`과 `Dog`가 갖는 공통적인 속성과 메소드를 포함하고 있어요.

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
```
<br>

아래 코드는 `Aniaml` 클래스의 정보를 상속받을 `Cat` 클래스를 보여줍니다.

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
 
  get behavior() {
    return this._behavior;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
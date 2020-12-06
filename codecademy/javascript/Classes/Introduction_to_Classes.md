## Introduction to Classes
---
자바스크립트는 실제 아이템을 모델링하는 데 사용할 수 있는 객체 지향 프로그래밍(OOP) 언어예요. 클래스는 개발자들이 유사한 오브젝트를 신속하게 생산하기 위해 사용하는 도구죠.
<br>
<br>

`halley`라는 이름의 개를 나타내는 객체를 예로 들어보자면, 이 개의 `name`(`a key`)은 `halley`(`a value`)이고, `age`(`another key`)는 `3`(`another value`)예요.

```javascript
let halley = {
  _name: "Halley",
  _behavior: 0,
 
  get name() {
    return this._name;
  },
 
  get behavior() {
    return this._behavior;
  },
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
<br>

우리가 개를 돌보는 곳을 운영하고 있고, 해당 탁아소에 속하는 모든 개들의 카탈로그를 만들고 싶다고 생각해 보세요. 탁아소에 가입하는 모든 개에 대해 위의 구문을 사용하는 대신 새로운 `dog object`를 만드는 템플릿 역할을 하는 `dog class`를 만들 수 있어요. 각각의 새로운 개에 대해 이름의 값을 제공할 수 있어요.
<br>
<br>

클래스는 중복 코드와 디버깅 시간을 줄일 수 있는 좋은 방법이에요.
<br>
<br>
## Method Calls
---
마지막으로, `Dog` 인스턴스의 데이터에 접근하고, 조작하기 위해 새로운 메소드를 사용해봐요.
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
 
const halley = new Dog("Halley");
```
<br>

위 예시에서, `Dog` 클래스를 만들어, 인스턴스를 생성해 `halley`라는 이름을 가진 변수에 저장했어요.
<br>
<br>

인스턴스에서 메소드와 `getter`를 호출하는 구문은 객체에서 메소드를 호출하는 구문과 동일하고, 인스턴스에서 마침표를 추가하고, 속성 또는 메소드 이름을 입력하세요. 메소드의 경우, 괄호도 포함해야 합니다!
<br>
<br>

```javascript
const nikko = new Dog("Nikko"); // Create dog named Nikko

nikko.incrementBehavior(); // Add 1 to nikko instance's behavior

console.log(nikko.behavior); // Prints 1
```
<br>

위 예시에서, `nikko`라는 `Dog` 인스턴스를 만들었어요. `nikko`에서 `incrementBehavior()` 메소드로 접근해 `behavior`를 `1` 증가했어요. 그렇기 때문에 출력해보면, `1`이라는 값을 나타내죠.
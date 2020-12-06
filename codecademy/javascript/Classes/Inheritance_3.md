## Inheritance 3
---
`Dog`와 `Cat`의 공통적인 속성과 메소드를 `Animal`라는 부모 클래스로 추상화했어요.

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

이제는 부모 클래스의 속성과 메소드를 상속받는 자식인 `Cat` 클래스를 만들겁니다.

```javascript
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```

위 예시에서 `Animal` 클래스를 확장하는 `Cat`이라는 새로운 클래스를 만들었어요. 새로운 키워드가 나왔군요! 확인해 봅시다.

- `extends` 키워드는 `Cat` 클래스 안에서 `Animal` 클래스의 메소드를 사용할 수 있어요.

- `constructor`는 새로운 `Cat` 객체를 만들 때, `name`과 `usesLitter`라는 두 개의 인자를 받습니다.

- `super` 키워드는 부모 클래스의 생성자를 호출해요. `super(name)`의 경우 `Cat` 클래스의 `name` 인자를 `Animal` 클래스의 생성자로 전달해요. `Animal`의 생성자가 작동할 때, `this._name = name;`이 실행되어 새로운 `Cat` 인스턴스에 설정돼요.

- `_usesLitter`는 `Cat` 클래스의 새 속성이에요. `Cat`의 생성자에서 설정이 됩니다.

<br>

참고로, `constructor()`의 첫 번째에 `super`를 호출한 다음 두 번째 라인에 `usesLitter` 속성을 설정하는데, `constructor()`는 항상 `super` 메소드를 호출해야 `this` 키워드를 사용할 수 있어요. 그렇지 않으면 `Javascript`에서 `Refference Error`를 발생시켜요. 해당 오류를 방지하려면 하위 클래스 생성자의 첫 번째 라인에서 `super`를 호출하는게 좋죠.
<br>
<br>

```javascript
const bryceCat = new Cat("Bryce", false);
console.log(bryceCat._name);
// Prints "Bryce"
```

위 예시는 `bryceCat`이라는 이름의 `Cat` 클래스의 새 인스턴스를 생성해요. `name`과 `usesLitter` 인자로 `"Bryce"`, `false`를 전달헀어요. `console.log(bryceCat._nmae)`을 호출했을 때, 프로그램은 `"Bryce"`를 출력하죠.
<br>
<br>

```javascript
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor (name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
```
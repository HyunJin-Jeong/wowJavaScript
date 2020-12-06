## Getters
---
`Getters`는 객체 내부 속성 값을 가져오고 반환하는 메소드예요. 그러나, 그것은 속성의 값을 가져오는 것 이상의 일을 할 수 있죠.
<br>
<br>

```javascript
const person = {
  _firstName = "Hyunjin",
  _lastName = "Jeong",
  get fullName () {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return `Missing a first name or a last name.`;
    }
  }
}

// To call the getter method:
person.fullName; // Returns "Hyunjin Jeong"
```
<br>

위 예시에 대한 설명이에요.

- 함수에 `get` 키워드를 사용했어요.

- `if...else` 조건을 이용해서 `_firstName`과 `_lastName`이 존재하는지 확인 후 존재한다면, 그 둘을 붙인 값을 반환했어요.

- `calling object`의 내부 속성으로 접근하기 위해 `this`를 사용했어요. `fullName`에는 둘에 접근하기 위해 `this._firstName`과 `this._lastName`을 사용했죠.

- 마지막 줄에서는 `person` 객체의 `fullName` 메소드를 호출했어요. 일반적으로, `getter` 메소드는 괄호로 호출할 필요가 없어요.

<br>

이제 구문을 살펴보았고, `getter` 메소드를 사용할 때 몇 가지 주목해야 할 이점에 대해 이야기해 볼게요.

- `Getters`는 속성을 가져왔을 때, 데이터에 대한 동작을 수행할 수 있어요.

- `Getters`는 조건을 사용하여 다른 값을 반환할 수 있어요.

- ` Getters` 에서, `this`를 사용하여 `calling object`의 속성에 접근할 수 있어요.

- 해당 코드는 다른 개발자들이 이해하기 더 쉬워요.

<br>

`Getter`(또는 `Setter`) 메소드를 사용할 때 주의해야 할 또 다른 사항은 속성이 `getter`(또는 `setter`) 함수와 동일한 이름을 공유할 수 없어요. 만약 그렇게 한다면, 메소드를 호출했을 때 무한 `call stack` 에러가 발생할 것이에요. 한 가지 해결 방법은 위 예시처럼, 속성 이름 앞에 밑줄을 추가하는 것입니다.
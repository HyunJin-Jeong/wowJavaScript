## Static Methods
---
때때로 우리는 클래스에 개별으로는 사용할 수 없지만 클래스에서 직접 호출할 수 있는 메소드가 있기를 원할 수도 있어요.
<br>
<br>

예를들어, 원하는 날짜를 나타내기 위해 `Date` 인스턴스를 만들고, 클래스에서 직접 날짜를 반환하는 `Date.now()`와 같은 정적 메소드를 호출할 수 있어요. `.now()` 메소드는 정적이므로, 클래스에서 직접 호출할 수 있지만 클래스의 인스턴스에서는 호출할 수 없어요.
<br>
<br>

`Static` 키워드를 사용해서 `Animal` 클래스에서 `generateName` 메소드라고 하는 `Static Method`를 만들어 봅시다.

```javascript
class Animal {
  constructor (name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName () {
    const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
    const randomNumber = Math.floor(Math.random() * 5);
    return names[randomNumber];
  }
}
```

위 예시에서, `.generateName()`을 호출하면, 랜덤한 이름을 반환하는 `static` 메소드를 만들었어요. `Static` 키워드이기 때문에 `Animal` 클래스에서 추가해야만 `.generateName()`에 접근할 수 있어요.
<br>
<br>

```javascript
console.log(Animal.generateName());
// Returns a Name
```

위와 같이, `Animal` 클래스에서 해당 메소드를 호출하면, 값이 출력돼요.
<br>
<br>

```javascript
const tyson = new Animal("Tyson");
tyson.generateName(); // TypeError
```

위와 같이, 클래스로 만든 인스턴스에서 해당 메소드를 호출하면, `TypeError`가 발생한답니다.(자식 클래스의 인스턴스도 마찬가지입니다!)
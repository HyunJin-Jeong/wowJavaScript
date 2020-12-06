## The this Keyword
---
객체는 관련 데이터 또는 함수의 모음이에요. 그리고, 함수는 객체의 메소드에 저장하죠.
<br>
<br>

```javascript
const goat = {
  dietType: "herbivore",
  makeSound () {
    console.log("baaa");
  },
};
```
<br>

`goat` 객체는 `.makeSound()` 메소드를 갖고 있어요. 그리고, `goat`의 `.makeSound()` 메소드를 호출할 수 있죠.

```javascript
goat.makeSound(); // Prints "baaa"
```
<br>

좋아요. `goat` 객체에서 `baaa`를 콘솔에 출력할 수 있어 모든 것이 잘 되는 것 같죠. `diet()`라고 불리는 `goat`의 `dietType`을 출력하는 새로운 메소드를 `goat`에 추가하고자 한다면 어떨까요?

```javascript
const goat = {
  dietType: "herbivore",
  makeSound () {
    console.log("baaa");
  },
  diet () {
    console.log(dietType);
  }
};

goat.diet();
// Prints will be "ReferenceError: dietType is not defined"
```
이상하네요. 왜 `dietType`이 `goat`의 속성인데도 정의되지 않았다는 문구가 출력될까요? 그것은 `diet()` 메소드의 `scope`에서 `goat` 객체의 다른 속성에 자동적으로 접근할 수 없기 때문이죠.
<br>
<br>

해당 작업의 키워드는 바로 `this`예요. `this`를 사용해서 `diet()` 메소드를 변경하면, `diet()`가 정상적으로 작동하죠!

```javascript
const goat = {
  dietType: "herbivore",
  makeSound () {
    console.log("baaa");
  },
  diet () {
    console.log(this.dietType);
  }
};

goat.diet();
// Prints herbivore
```
<br>

`this` 키워드는 호출하는 객체의 속성에 대한 접근을 제공하는 `calling object`를 참조해요. 위 예에서, 호출하는 객체는 `goat`인데, `this`를 이용해서 `goat` 객체 자체에 접근하고, 그 다음에는 `dot` 연산자를 이용해 `goat`의 `dietType` 속성에 접근하죠.
<br>
<br>

```javascript
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo () {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  }
};

console.log(robot.provideInfo());
```
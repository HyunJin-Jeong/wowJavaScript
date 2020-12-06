## Setters
---
`Getter` 메소드와 함께, 객체 안에 있는 기존 속성의 값을 재할당한 `Setter` 메소드를 만들 수 있어요.
<br>
<br>

```javascript
const person = {
  _age: 21,
  set age (newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  }
};
```
<br>

위 예시를 살펴볼게요.

- 무슨 값이 할당되어 있는지 확인하기 위해 `this._age`를 사용했어요.

- `setter` 메소드를 사용할 때, 숫자인 값만 `this._age`를 재할당해요.

- `this._age`를 재할당하기 위해 사용하는 값에 따라 다른 출력이 있을 거예요.

<br>

```javascript
person.age = 40;
console.log(person._age); // Prints 40
person.age = "40"; // Prints "You must assign a number to age"
```
<br>

`age`와 같은 `setter` 메소드는 괄호로 호출할 필요가 없어요. 구문으로 볼 때, 우리가 속성의 값을 재지정하는 것처럼 보이죠.
<br>
<br>

`getter` 메소드와 마찬가지로, 입력한 값을 확인하고, 속성에 따라 동작을 수행하고, 사용한 메소드에 대한 명확한 전달 등을 포함하는 것이 유사한 장점이에요. 그럼에도 불구하고 `setter` 메소드로도 속성을 직접 재할당할 수 있죠.

```javascript
person._age = "forty-five";
console.log(person._age); // Prints "forty-five"
```
<br>
<br>

```javascript
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors (num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  }
  
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
```
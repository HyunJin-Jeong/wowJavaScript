## Logical Operators
---
우리는 조건문으로 작업할 때, `true`와 `false`라는 값을 이용해요. Javascript에서, 연산자를 이용해 `boolean` 값으로 작업하는 `논리 연산자`가 있어요. 우리는 `논리 연산자`를 통해 더욱 복잡한 조건들을 반영할 수 있죠.
- the and operator (`&&`)
- the or operator (`||`)
- the not operator, otherwise known as the bang operator (`!`)

<br>

`&&` 연산자는 두 가지 조건이 모두 `true`인 경우 `true`라고 판단해요.
```javascript
if (stopLight === "green" && pedestrians === 0) {
    console.log("Go!");
} else {
    console.log("Stop!");
}
```
<br>

`&&` 연산자를 사용할 때, 양쪽의 조건이 모두 `true`여야만 `true`라고 판단해요. 다른 한 쪽이라도 `false`가 되면, 다른 코드 블록을 실행하게 될 겁니다.
<br>
<br>

우리가 두 조건 중 하나라도 `true`에 포함되는지만 신경쓴다면, `||` 연산자를 이용할 수 있어요.
```javascript
if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend!");
} else {
    console.log("Do some work.");
}
```
위 예시처럼, `day === "Saturday"` 또는 `day === "Sunday"`의 결과가 `true`라고 판단되고 그 코드 블록이 실행돼요. 만약 첫 번째 조건이 `true`로 판단된다면, 두 번째 조건은 확인도 하지 않을 것이죠. 첫 번째 조건이 `false`로 판단되어야만 두 번째 조건을 판단합니다. 또한, 모든 조건이 `false`라는 결과를 나타내면 다른 코드 블록이 실행될 것이에요.
<br>
<br>

`!` 연산자는 `boolean` 값을 반전시키거나 부정해요.
```javascript
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true
```
근본적으로, `!` 연산자는 `true` 값을 취해서 `false`를 주거나, `false` 값을 취해서 `true`를 줍니다.
<br>
<br>

이러한 논리 연산자는 종종 우리 코드에 또 다른 계층을 추가하기 위해 조건문에 사용돼요.
<br>
<br>
```javascript
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}
```
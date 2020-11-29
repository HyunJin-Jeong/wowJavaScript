## Truthy and Falsy
---
조건 내에서 확인할 때 문자열이나 숫자와 같은 `boolean`이 아닌 데이터 타입이 어떻게 판단되는지 생각해 봅시다.
<br>
<br>

경우에 따라 변수가 존재하는지 확인하고 변수가 특정 값과 동일한지 확인하려고 할 수 있지만, 변수 자체에 값을 할당 받았는지 확인할 수도 있어요.
```javascript
let myVariable = "I Exist!";

if (myVariable) {
    console.log(myVariable)
} else {
    console.log("The variable does not exist.");
}
```
<br>

`myVariable` 변수는 값을 가지기 떄문에 `if` 문 내의 코드 블록을 실행해요. `myVariable`의 값이 명시적으로 `true` 값이 아님에도 불구하고, `boolean` 또는 비교문으로 사용될 경우, `non-falsy` 값이 할당되었기 때문에 `true`로 판단해요.
<br>
<br>

`falsy` 값을 갖거나 `false`로 판단하려면 어떤 조건이 필요할까요?
- `0`
- 빈 문자열인 `""` 또는 `''`
- 값이 없음을 나타내는 `null`
- 선언된 변수에 값이 없을 때 나타내는 `undefined`
- `NaN` 또는 `Not a Number`

<br>

예시를 봅시다.
```javascript
let numberOfApples = 0;

if (numberOfApples) {
    console.log("Let us eat apples!");
} else {
    console.log("No apples left!");
}
// Prints "No apples left!"
```
위 조건문에서 `numberOfApples` 변수의 값이 `0`이기 때문에 `false`로 판단해요. `0`은 `falsy`한 값이기 때문에 `else` 문 코드 블록이 실행될 것이에요.
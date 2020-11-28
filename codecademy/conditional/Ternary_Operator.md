## Ternary Operator
---
우리는 짧은 구문을 사용한다는 의미에서 `if...else` 문구를 단순화하기 위해 `ternary operator`를 사용할 수 있어요.
```javascript
let isNightTime = true;

if (isNightTime) {
    console.log("Turn on the lights!");
} else {
    console.log("Turn off the lights!");
}
```
위 코드를 `ternary operator`를 통해 아래와 같이 단순화 할 수 있어요!
```javascript
isNightTime ? console.log("Turn on the lights!") : console.log("Turn off the lights!");
```
위 예시를 설명해보자면,
- 조건인 `isNightTime`은 `?` 앞에 작성해요!
- `?`에 이어서 두 표현이 `:`에 의해 분리돼요.
- 만약, 조건이 `true`라고 판단되면, `:` 앞의 표현을 실행해요.
- 만약, 조건이 `false`라고 판단되면, `:` 뒤의 표현을 실행해요.

<br>

`if...else` 문과 같이 `ternary operator`는 `true` 또는 `false`로 판단되는 조건에 사용될 수 있어요.
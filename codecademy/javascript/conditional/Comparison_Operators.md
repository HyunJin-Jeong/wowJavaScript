## Comparison Operators
---
우리가 조건문을 작성할 때, 때때로 우리가 원하는 타입인지 확인해야 할 필요가 있어요. 이때 사용하는 연산자가 비교 연산자입니다!
<br>
<br>

아래 비교 연산자 리스트를 확인해보세요.
- Less than: `<`
- Greater than: `>`
- Less than or equal to: `<=`
- Greater than or equal to: `>=`
- Is equal to: `===`
- Is not equal to: `!==`

<br>

비교 연산자는 왼쪽 값과 오른쪽 값을 비교합니다.
```javascript
10 < 12 // Evaluates to true
```

<br>

비교 연산자를 질문으로 생각하면 도움이 될 거예요. 어떠한 질문에 `yes!`하고 대답할 때, `true`로 판단합니다. 그리고 `no!`하고 대답한다면, `false`로 판단하죠. 위 코드에서 물어보길 `10이 12보다 더 작은가?`에 대한 답에서 우리는 `Yes!`라고 외쳤습니다. 고로 `true`라는 값이 반환되죠.
<br>
<br>

또한 문자열과 같은 다양한 데이터 유형에 대해 비교 연산자를 사용할 수 있어요.
```javascript
"apple" === "banana" // Evaluates to false
```
위 예시에서, `===` 연산자를 이용해 문자열 `"apple"`과 `"banana"`가 서로 동일한지 확인하고 있죠. 두 문자열이 서로 같지 않기 때문에 비교문은 `false`라고 판단합니다!
<br>
<br>

모든 비교문은 `true` 또는 `false`로 평가되며, 다음과 같이 구성됩니다.
- 비교 할 두 가지 값
- 값을 구분하여 그에 따라 비교하는 연산자(`>`, `<`, `<=`, `>=`, `===`, `!==`)
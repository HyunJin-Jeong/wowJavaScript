## If...Else Statements
---
이전 학습에서, 우리는 `if` 문을 사용해 조건을 확인한 후 코드 블록을 실행했어요. 하지만 조건에 맞지 않으면 실행하지 않았죠. 많은 상황에서, 우리는 조건이 맞지 않는 상황에서도 코드를 실행해야 할 수 있어요.
<br>
<br>

만약 우리가 `if` 문에서 조건이 `false`로 평가될 때, 실행해야 할 코드가 있다면 `else` 문을 사용합니다.
```javascript
if (false) {
    console.log("The code in this block will not run.");
} else {
    console.log("But the code in this block will!");
}
// Prints "But the code in this block will!"
```
<br>

`else` 문은 `if` 문과 함께 사용해야 해요. 그리고 이 둘을 함께 `if...else` 문이라고 합니다.
<br>
위 예시의 자세한 설명을 해볼게요.
- `if` 문 코드 블록 다음에 `else` 문을 사용합니다.
- 중괄호`{}`로 감싸지는 코드 블록이 있습니다.
- `else` 문 코드 블록 내부의 코드는 `if` 문의 조건이 거짓으로 평가될 때, 실행합니다.

<br>

`if...else` 문은 진실과 거짓에 대한 해결을 자동화 할 수 있으며, 이를 `binary decisions`라고 해요.
> binary decision은 두 가지 대안 중 하나를 선택하는 것입니다.

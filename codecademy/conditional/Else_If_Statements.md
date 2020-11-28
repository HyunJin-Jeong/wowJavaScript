## Else If Statements
---
우리는 `if...else` 문과 함께 `else if` 문을 사용할 수 있어요. `else if` 문은 어떠한 조건에 대해 세 가지 이상의 가능성을 받아들이죠. 더 복잡한 조건을 만들기 위해 원하는 만큼 더 많은 것을 추가할 수 있어요!
<br>
<br>

`else if` 문은 항상 `if` 문 뒤에 오며, `else` 문 앞에 있어요. 그리고 다른 조건이 더 붙을 수 있죠.
```javascript
let stopLight = "yellow";

if (stopLight === "red") {
    console.log("Stop!");
} else if (stopLight === "yellow") {
    console.log("Slow down.");
} else if (stopLight === "green") {
    console.log("Go!");
} else {
    console.log("Caution, unknown!");
}
```
<br>

`else if` 문은 여러 가능한 결과를 허용해요. `if/else`, `if/else` 문이 위에서 아래로 읽혀지는데, 위에서 아래를 순서로 `true` 판단이 되는 조건문의 코드 블록이 실행돼요.
<br>
<br>

위 예시에서, `stopLight === "red"` 조건이 `flase`, 그리고 `stopLight === "yello"` 조건이 `true`로 판단되어 첫 번째 `else if` 문 안의 코드를 실행해요. 그 외 나머지 조건은 판단하지 않아요. 만약 어떤 조건도 `true`가 아니라면, `else` 문 안의 코드를 실행했을 거예요.
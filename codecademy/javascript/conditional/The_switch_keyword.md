## The switch keyword
---
`else if` 문은 여러 조건을 확인해야 할 경우 훌륭하게 동작합니다. 하지만 프로그래밍을 할 때, 우리는 여러 값을 확인하고, 그것들을 각각 다룰 필요가 있다는 것을 발견해요.
<br>
예를들어,
```javascript
let groceryItem = "papaya";

if (groceryItem === "tomato") {
    console.log("Tomatoes are $0.49");
} else if (groceryItem === "papaya") {
    console.log("Papayas are $1.29");
} else {
    console.log("invalid item");
}
```

위 코드에서, `groceryItem` 변수와 일치하는 값을 확인하는 조건들이 있어요. 그리고 이 코드는 잘 동작하지만, 만약 우리가 100개의 다른 값을 확인해야 한다고 생각하면, 일일이 작성해야 한다는 생각에 굉장히 힘들거예요.
<br>
<br>

`switch` 문은 읽고 쓰기가 더 쉬운 문법을 사용해요.
```javascript
let groceryItem = "`papaya";
 
switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}
```
- `switch` 키워드는 문장을 시작하고, 뒤에 괄호`()`가 있어요. 이 부분은 판단을 위한 값을 포함하죠. 위 예시에서 해당하는 값은 `groceryItem`이에요.
- 중괄호`{}` 내부에는 여러 케이스가 존재해요. `case` 키워드는 바로 뒤에오는 값을 판단을 위한 값과 비교합니다. 첫 번째 `case`는 `tomato`이며, 만약 `groceryItem` 변수의 값이 `tomato`라면, 바로 아래 `console.log()`를 실행하게 될 거예요.
- `groceryItem`의 값은 `papaya`입니다. 그래서 세 번째 `case`가 실행되어 `"Papayas are $1.29"` 문자열이 출력돼요.
- `break` 키워드는 컴퓨터에서 해당 블록을 종료하고 더 이상 코드를 실행하거나 코드 블록 내부의 다른 사례들을 확인하지 않도록 지시해요. (참고: `break` 키워드가 없다면, 모든 `case`가 일치 여부와 상관없이 `default` 값을 포함하여 실행됩니다. 하나의 코드 블록만 실행하는 `if...else`와는 달라요!)
- 각 `switch` 문 끝에는 `default` 키워드가 있어요. 어떤 경우도 `true`가 아닌 경우, `default` 키워드 내부의 코드가 실행될 거예요.
## The .pop() Method
---
`.pop()`은 `array`의 마지막 항목을 지울 수 있는 메소드예요.
```javascript
const newItemTracker = ["item 0", "item 1", "item 2"];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Prints ["item 0", "item 1", "item 2"]
console.log(removed);
// Prints ["item 2"]
```

- `newItemTracker` 배열에서 마지막 항목인 `item 2`를 지우기 위해 `.pop()`을 호출했어요.

- `.pop()`은 어떤 인자도 받지 않아요. 그저 `newItemTracker` 배열의 마지막 항목을 지울 뿐이죠.

- `.pop()`은 마지막 항목의 값을 반환해요. 예시처럼, `removed` 변수에 반환한 값을 저장했더니 `newItemTracker`의 마지막 항목을 저장했죠.

<br>

만약, 배열에서 마지막 항목을 제거하고 싶다면, `.pop()` 메소드를 사용하세요!
<br>
(초기 배열을 변경할 수 있다는 점을 주의하세요)
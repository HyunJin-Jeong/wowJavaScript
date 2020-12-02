## The .push() Method
---
`Javascript`에서 `arrays`를 보다 쉽게 사용할 수 있는 몇 가지 내장 함수를 알아봅시다! 이 방법은 특히 `elements` 추가, 제거와 같은 작업을 쉽게 진행하기 위해 호출됩니다.
<br>
<br>

첫 번째 메소드인 `.push()`는 `array`의 끝에 항목을 추가할 수 있어요.
```javascript
const itemTracker = ["item 0", "item 1", "item 2"];

itemTracker.push("item 3");

console.log(itemTracker);
// Prints ["item 0", "item 1", "item 2", "item 3"];
```
<br>

`.push()`는 어떻게 동작하는가?

- `push method`를 이용할 떄, `push`를 `itemTracker`에 `dot`으로 연결하며 `push method`로 접근해요.

- 그러면 우리는 그것을 함수처럼 호출해요. 왜냐하면 `.push()`는 `javascript`가 배열에서 바로 사용할 수 있도록 해주는 함수이기 때문이죠.

- `.push()`는 인자를 한 개 또는 여러 개를 받을 수 있어요. 그렇게 우리는 `"item 3"`와 `"item 4"`를 `itemTracker`에 추가했죠.

- `.push()`로 `itemTracker`를 변경했어요.

<br>

만약, 배열에 요소를 추가하여 배열을 바꿀 방법을 찾고 있다면, `.push()`가 그 해답입니다!
<br>
(초기 배열을 변경할 수 있다는 점을 주의하세요)
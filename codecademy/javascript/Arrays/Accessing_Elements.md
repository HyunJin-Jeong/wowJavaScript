## Accessing Elements
---
배열의 각 `element`에는 `index`라고 하는 번호가 매겨진 위치가 있어요. 우리는 `index`를 통해 개별 항목에 접근할 수 있는데, 이것은 항목의 위치를 기준으로 리스트의 항목을 참조하는 것과 비슷해요.
<br>
<br>

자바스크립트의 `arrays`는 `zero-indexed`으로, 배열의 위치는 `1`이 아니라 `0`부터 시작해요.
<br>
<br>

```javascript
let cities = ["New York", "Seoul", "London"];

cities[0]
```
- `cities`는 세 개의 요소가 있어요.

- 해당 요소에 접근하기 위해 배열 이름 뒤에 대괄호`[]`와 함께 `0`번 `index`를 지정했어요.

- `cities[0]`은 `cities` 배열의 `0`번 인덱스로 접근해요. 해당 값은 `New York`입니다!

<br>

추가로, `string` 타입의 문자열도 문자마다 인덱스 값이 매겨져요. 우리는 위 코드처럼 문자열에도 인덱스로 접근할 수 있답니다!
```javascript
const hello = "Hello World!";
console.log(hello[2]); // Prints "l"
```
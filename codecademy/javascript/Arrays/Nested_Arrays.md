## Nested Arrays
---
이전에 배열이 다른 배열을 저장할 수 있다고 언급했어요. 배열에 다른 배열이 포함되어 있으면 중첩 배열이라고 하죠.
<br>
<br>

```javascript
const nestedArr = [[1], [2, 3]];
```

중첩된 배열로 액세스하려면 다른 요소에 액세스할 때와 마찬가지로 `index` 값에 괄호 표기법을 사용할 수 있어요.

```javascript
console.log(nestedArr[1]); // Prints [2, 3]
```

위 예시의 배열 `nestedArr`의 두 번째 인덱스로 접근했을 때, 해당 값은 `[2, 3]` 입니다. 그 다음, 중첩 배열 내의 요소에 액세스하기 위해서는 인덱스 값을 사용하여 괄호를 추가하면 돼요.

```javascript
console.log(nestedArr[1][0]) // Prints 2
```
이번 예시는 `console.log()` 구문을 통해 `nestedArr` 배열에서 두 번째 인덱스 값인 `[2, 3]`에서 첫 번째 인덱스를 출력했어요. `nestedArr[1][0]`이라는 구문이 `2`라는 값을 가져오죠.
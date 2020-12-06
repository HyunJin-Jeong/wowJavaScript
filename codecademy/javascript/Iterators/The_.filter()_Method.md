## The .filter() Method
---
`.map()`과 같은 유용한 메소드 중에 `.filter()`가 있어요. `.filter()` 메소드도 새 배열을 반환하죠. 하지만, `.filter()`는 원본 배열에서 특정 요소를 필터링 후 요소의 배열을 반환하죠. `.filter()` 메소드에 대한 콜백 함수는 전달된 요소에 따라 `true` 또는 `false`를 반환해요. 콜백 함수를 `true`로 되돌리는 요소가 새 배열에 추가돼요.
<br>
<br>

```javascript
const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter(word => word.length <  6;);
```

- `words`는 요소에 문자열을 포함한 배열이에요.

- 호출한 `.filter()`로 부터 반환된 배열을 저장하는 변수 `shortWords`를 선언했어요.

- 콜백 함수는 `arrow function`에 하나의 파라미터인 `word`가 있어요. `words` 배열의 각 요소는 해당 인자로 함수에 전달될 것이에요.

- `word.length < 6;`은 콜백 함수의 조건이에요. `words` 배열에서 6자 미만인 `word`는 `shortWords` 배열에 추가되죠.

<br>

결과는 아래와 같답니다.

```javascript
console.log(words);
// Prints ["chair", "music", "pillow", "brick", "pen", "door"]

console.log(shortWords);
// Prints ["chair", "music", "brick", "pen", "door"]
```
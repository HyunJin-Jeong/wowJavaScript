## The .map() Method
---
두 번째 `iterator`로, `.map()`을 사용할 거예요. 배열에서 `.map()`를 호출하면, 그것은 콜백 함수의 인자로 전달되고, 새 배열을 반환합니다!

```javascript
const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => number * 10);
```
`.map()`은 `.forEach()`와 비슷한 동작을 해요. 하지만 새 배열을 반환한다는 점이 다르죠.
<br>
<br>

위 예시를 볼게요.

- 숫자들을 담은 배열인 `numbers`가 있어요.

- `numbers` 배열에 `.map()` 메소드를 호출해 반환받은 값을 `bigNumbers`에 저장했어요.

- `numbers.map`은 `numbers` 배열에서 각 요소를 반복하여 콜백 함수로 전달해요.

- `number * 10`은 배열의 각 요소에서 실행되는 구문이에요. 그것은 `numbers` 배열의 각 요소에 있는 값에서 `10`을 곱한 후 새 배열에 저장하죠.

<br>

예시의 코드를 실핸한 후 `bigNumbers` 배열을 출력하면 아래와 같은 결과가 나올 거예요.

```javascript
console.log(numbers);
// Prints [1, 2, 3, 4, 5]

console.log(bigNumbers);
// Prints [10, 20, 30, 40, 50]
```
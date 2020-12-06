## The .forEach() Method
---
첫 번째 `iteration` 메소드는 `.forEach()`입니다. 적절한 이름을 가진 `.forEach()`는 배열의 각 요소에 대해 같은 코드를 실행해요.
<br>
<br>

```javascript
const groceries = ["brown sugar", "salt", "cranberries", "walnuts"];

groceries.forEach(function(groceryItem) {
  console.log(" - " + groceryItem);
});
```
<br>

위 코드는 잘 포맷된 `groceries`를 콘솔에 기록할 거예요. `.forEach()`를 호출하는 방법을 알아봐요.

- `groceries.forEach()`는 `groceries` 배열의 `forEach` 메소드를 호출해요.

- `.forEach()`는 콜백 함수의 인자를 전달해요. 콜백 함수는 인자로 다른 함수에 전달되는 함수예요.

- `.forEach()`는 배열을 반복하고, 각 요소에 대해 콜백 함수를 실행해요. 실행 중에 현재 요소는 콜백 함수에 대한 인자로 전달돼요.

- 그리고, `.forEach()`에서 반환하는 값은 항상 `undefined`입니다.

<br>

`arrow function`을 이용해 `.forEach()` 메소드를 다른 방식으로 호출할 수 있어요.

```javascript
groceries.forEach(groceryItem => console.log(groceryItem));
```
<br>

콜백 함수로 사용할 함수를 미리 정의할 수도 있어요.

```javascript
function printGrocery(element) {
  console.log(element);
}

groceries.forEach(printGrocery);
```

위 예시는 함수 선언을 사용하지만, `function expression`이나, `arrow function`도 사용 가능해요.
<br>
<br>

세 코드 모두 같은 일을 해요. 배열의 `iteration method`에서는 세 가지 예 중 하나를 사용하여 콜백 함수를 `iterator`에 인수로 제공할 수 있어요. 개발자들은 서로 성향이 다르기 때문에 콜백 함수를 `iterator`에서 인자로 전달하는 다양한 방법을 알고 있는 것이 좋아요.
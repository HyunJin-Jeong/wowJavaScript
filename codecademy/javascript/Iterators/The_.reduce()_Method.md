## The .reduce() Method
---
또 다른 `iteration method` 중에 널리 사용되는 `.reduce()` 메소드가 있습니다. `.reduce()` 메소드는 배열의 요소를 반복한 후 단일 값으로 반환하므로 배열이 감소하죠.

```javascript
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((acc, cur) => acc + cur);

console.log(summedNums);
// Prints 17
```
<br>

위 코드의 동작은 아래와 같답니다.
<br>
<table>
  <tr>
    <th scope="col">Iteration
    <th scope="col">acc
    <th scope="col">cur
    <th scope="col">return value
  </tr>
  <tr>
    <th scope="row">First
    <td>1
    <td>2
    <td>3
  </tr>
  <tr>
    <th scope="row">Second
    <td>3
    <td>4
    <td>7
  </tr>
  <tr>
    <th scope="row">Third
    <td>7
    <td>10
    <td>17
  </tr>
</table>
<br>

- `numbers`는 숫자들을 포함한 배열이에요.

- `summedNums`는 `numbers` 배열에서 `.reduce()`를 호출 후 반환한 값을 저장하는 변수예요.

- `numbers.reduce()`는 `numbers` 배열에서 `.reduce()` 메소드를 호출하고, 인자를 콜백 함수에 전달하죠.

- 콜백 함수는 두 개의 파라미터인 `acc`와 `cur`을 갖고 있어요. `acc`의 값은 배열의 첫 번째 요소의 값으로 시작하고, `cur`은 두 번째 요소의 값으로 시작해요. `acc`, `cur`의 값을 보려면 위 표를 확인하세요!

- `.reduce()` 메소드로 배열을 반복하면, 콜백 함수의 반환 값이 다음 반복을 위해 `acc`의 값으로 축적되고, `cur`는 `loop process`에서 현재 요소의 값을 갖게돼요.

<br>

`.reduce()` 메소드는 선택적으로 두 번째 파라미터를 통해 `acc` 값을 초기화 할 수 있어요. (첫 번째 파라미터는 콜백 함수였던 것을 기억하세요!)

```javascript
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((acc, cur) => acc + cur, 100)

console.log(numbers);
// Prints 117
```

위의 예시를 확실하게 이해하고 싶다면, 아래 표를 확인하세요!
<br>
<table>
  <tr>
    <th scope="col">Iteration
    <th scope="col">acc
    <th scope="col">cur
    <th scope="col">return value
  </tr>
  <tr>
    <th scope="row">First
    <td>100
    <td>1
    <td>101
  </tr>
  <tr>
    <th scope="row">Second
    <td>101
    <td>2
    <td>103
  </tr>
  <tr>
    <th scope="row">Third
    <td>103
    <td>4
    <td>107
  </tr>
  <tr>
    <th scope="row">Fourth
    <td>107
    <td>10
    <td>117
  </tr>
</table>
<br>
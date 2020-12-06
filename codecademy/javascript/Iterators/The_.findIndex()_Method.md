## The .findIndex() Method
---
우리는 가끔 배열의 요소에 대한 위치를 찾고 싶을 때가 있어요. 그때 사용하는 메소드는 `.findIndex()`랍니다. 배열에서 `.findIndex()` 메소드를 호출하면, 콜백 함수에서 `true`로 판단되는 첫 번째 요소의 인덱스가 반환돼요.
<br>
<br>

```javascript
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => num < 10);
```
<br>

- `jumbledNums`는 각 요소가 숫자를 포함한 배열이에요.

- `.findIndex()`를 호출함으로써 반환되는 인덱스 번호는 `lessThanTen`이라는 변수에 저장돼요.

- 콜백 함수는 화살표 함수에 단일 매개변수인 `num`을 가져요. `jumbledNums` 배열의 각 요소는 인자로 함수에 전달돼요.

- `num < 10` 은 각 요소에서 확인하는 조건이에요. `.findIndex()`를 통해 각 요소를 반복하며 해당 조건에 대해 `true`로 판단하는 첫 번째 요소의 인덱스를 반환하죠.

<br>

결과는 아래와 같답니다.

```javascript
console.log(lessThanTen);
// Prints 3
```
<br>

`jumbledNums` 배열에서 확인해보면,

``` javascript
console.log(jumbledNums[3]);
// Prints 5
```
<br>

`jumbledNums` 배열을 순차적으로 돌며, `10`보다 작은 수를 처음으로 발견한 인덱스가 `3`이군요. `3`이라는 인덱스 번호로 해당 배열을 조회하니 `5`라는 갑싱 나왔어요.
<br>
<br>

배열에 콜백의 조건을 만족하는 요소가 하나도 없을 경우 `findIndex()`가 `-1`을 반환해요.
<br>

```javascript
const greaterThan1000 = jumbledNums.findIndex(num => num > 1000);
 
console.log(greaterThan1000);
// Prints -1
```
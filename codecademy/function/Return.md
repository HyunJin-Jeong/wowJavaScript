## Return
---
함수를 호출할 때, 컴퓨터는 함수의 코드를 통해 실행되며, 함수를 호출한 결과를 판단해요. 기본적으로는 이 결과 값은 `undefined`입니다.
```javascript
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
```
예시 코드에서, 우리는 `width`와 `height`를 계산해서 `area`에 값을 정의했어요. 그 후 `rectangleArea()`가 인수 `5`, `7`과 함께 호출되었어요. 그러나 결과로 출력된 값은 `undefined`입니다. 코드에 문제라도 생긴 걸까요?
아닙니다! 사실, 작업은 정상적으로 됐으며, 컴퓨터는 `area`를 `35`로 계산했지만, 우리는 그 결과를 반환하지 않았어요. 만약 반환하고 싶다면, `return` 키워드를 입력하면 돼요!

```javascript
function rectangleArea(width, height) {
  let area = width * height;
  return area
}
```
<br>

함수 호출로 정보를 전달하기 위해 우리는 `return` 문을 사용해야 해요. `return` 문을 작성하기 위해 해당 키워드 뒤에 반환하고자 하는 값을 사용해요. 아시다시피, 반환 값을 설정하지 않으면 기본적으로 `undefined`를 반환하죠.
<br>
<br>

함수 본문에서 `return` 문을 사용하는 경우, 함수의 작업이 중지되고 그 뒤에 오는 코드는 실행하지 않아요.
```javascript
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}
```
만약, 인수 `width`와 `height` 값이 0보다 작으면, `rectangleArea()`는 문자열을 리턴해요. 당연하게도 값이 0보다 크면, `width * height`의 결과값을 리턴하죠.
<br>
<br>

`return`은 기능에서 출력을 할 수 있기 때문에 아주 중요한 키워드예요. 그런 다음 나중에 사용할 수 있도록 출력을 변수에 저장할 수도 있죠.
```javascript
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
```
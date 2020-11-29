## Parameters and Arguments
---
지금까지는 좋아요. 우린 함수에 무언가를 입력할 필요가 없이 그저 호출하면 됐어요. 하지만, 어떤 함수는 작업을 수행하기 위해 입력이 필요할 수도 있답니다. 그때는 우리가 함수 선언 시 함수의 `Parameters`를 지정할 수 있어요. `Parameters`를 사용하면 함수가 입력을 받아들이고, 입력을 사용하여 작업을 수행할 수 있어요. 호출할 때, 함수에 전달될 정보에 대해 매개변수를 `placeholders`로 사용합니다!
<br>
<br>

함수 선언 시 `Parameters`를 지정하는 방법을 관찰해 보아요.
```javascript
function calculateArea(width, height) {
    console.log(width * height);
}
```
위 함수는 사각형의 면적을 구하는 `calculateArea()`입니다. 해당 함수는 괄호`()` 안에 `Parameters`인 `width`, `height`가 들어가고, 중괄호`{}` 안 함수 본문에는 `width`와 `height` 값이 서로 곱해져서 콘솔에 출력합니다.
<br>
<br>

`Parameters`가 있는 함수를 호출할 때, 함수 이름 뒤 괄호 안에 값을 지정해요. 함수를 호출하면 해당 값이 함수에게 전달되는데, 이 값을 `Arguments`라고 해요. `Arguments`는 값 또는 변수로 전달될 수 있답니다.
```javascript
calculateArea(10, 6);
```
위 함수를 호출할 때 괄호 안 `width` 값을 `10`으로, `height` 값을 `6`으로 지정했어요. 이 값을 우리는 `argument`라고 부르죠. 함수로 전달되는 값이에요.
<br>
<br>

함수를 호출해서 `arguments`가 전달되고, 값이 할당되는 순서는 `parameters`가 선언되는 순서에 따라요.
```javascript
const rectWidth = 10;
const rectHeight = 6;

calculateArea(rectWidth, rectHeight);
```
위 예시처럼 함수를 호출 시, `rectWidth` 값과 `rectHeight` 값을 함수 호출에 이용하기 전에 먼저 해당 변수를 초기화해요.
## Helper Functions
---
다른 함수 안에 있는 함수의 반환 값을 사용할 수 있어요. 다른 함수 내에서 호출되는 이러한 함수를 `helper function`이라고 부르죠. 각 기능이 특정 장업을 수행하고 있기 때문에 필요할 경우 코드를 쉽게 읽어내고 디버깅할 수 있어요.
<br>
<br>

만약 섭씨 온도를 화씨 온도로 표현하고 싶다면, 아래 함수처럼 사용하면 되겠어요!
```javascript
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59
```
위 예시의 설명이에요.
- `getFahrenheit()`를 호출할 때, 인수로 `15`라는 값을 입력했어요.

- `getFahrenhei()` 안의 코드 블록에서 `multiplyByNineFifths()` 함수를 호출하면서 `15`라는 값을 인수로 전달했어요.

- `multiplyByNineFifths()`는 전달받은 `15`라는 값을 `number` 매개 변수로 취했어요.

- `multiplyByNineFifths()` 함수의 본문에서 `15`라는 값을 `(9/5)`와 곱셈 후 해당 값을 리턴했어요.

- `getFahrenheit()`는 `multiplyByNineFifths()`로부터 반환받은 `27`이라는 값에 `32`를 더해서 반환했어요.

- 결과적으로, `getFahrenheit(15)`를 통해 가져온 값은 `59`입니다!

<br>

함수를 이용해서 작업 등을 세세하게 분리하는 것처럼 필요할 때 사용할 수 있어요. `Helper function`은 크고 어려운 작업을 가져다가 더 작고 관리하기 쉬운 작업으로 분할하는 데 도움이 돼요.

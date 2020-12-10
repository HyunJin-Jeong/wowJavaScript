## Set a Minimum and Maximum
---
사용할 수 있는 또 다른 내장형 검증은 숫자 필드에 최소 또는 최대 값을 할당하는 것이에요. 예를 들어, `<input type="number">`와 `<input type="range">`에서 최소 값을 할당하려면 `min` 속성 지정 후 값을 할당하고, 반대로 최대 값을 할당하려면 `max` 속성 지정 후 값을 할당해요.

```html
<form action="/example.html" method="POST">
  <label for="guests">Enter # of guests:</label>
  <input id="guests" name="guests" type="number" min="1" max="4">
  <input type="submit" value="Submit">
</form>
```

위 코드에서 만약 유저가 1 이하의 값을 설정하면, 경고 메세지가 발생해요.

<form action="/example.html" method="POST">
  <label for="guests">Enter # of guests:</label>
  <input id="guests" name="guests" type="number" min="1" max="4">
  <input type="submit" value="Submit">
</form>


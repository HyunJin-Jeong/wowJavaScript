## Matching a Pattern
---
텍스트의 길이를 확인하는 것 외에도, 텍스트가 어떻게 제공되었는지 확인하기 위해 유효성을 검사할 수도 있어요. 사용자가 입력하는 것이 특정 지침을 따르게 하길 원한다면, `pattern` 속성을 사용하여 `regular expression`, `regex`를 할당해요. 정규식은 검색 패턴을 구성하는 일련의 문자들이에요. 입력이 `regax`와 일치하면, 양식을 제출할 수 있죠.
<br>
<br>

유효한 카드 번호(14 ~ 16 digit number)를 확인한다고 가정해보자! 그럼, `regax`인 `[0-9]{14,16}`로 사용자가 제공한 숫자를 14자리 ~ 16자리까지 입력했는지 확인해요.
<br>

```html
<form action="./example.html">
  <label for="payment">Credit Card Number:</label>
  <br>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>
```

`pattern`이 있는 위치에서 유저는 숫자가 `regex`를 충족하지 않으면, `<form>`으로 `submit` 할 수 없어요. 동시에 경고 메세지가 발생하죠.

<form action="./example.html">
  <label for="payment">Credit Card Number:</label>
  <br>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>
<br>

정규식은 사용할 곳이 많을 수 있답니다. 더 많은 정보를 얻고 싶다면 [이 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)를 참고해요!
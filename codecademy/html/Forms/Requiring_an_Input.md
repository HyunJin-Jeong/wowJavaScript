## Requiring an Input
---
때로는 우리가 `<form>`에 선택적이지 않은 필드를 사용하는데, 그것을 제출하기 전에 제공된 정보가 있어야 한다는 뜻이에요. 해당 규칙을 시행하기 위해 `required` 속성을 `<input>` 요소에 추가할 수 있어요.
<br>
<br>

```html
<form action="/example.html" method="POST">
  <label for="allergies">Do you have any dietary restrictions?</label>
  <br>
  <input id="allergies" name="allergies" type="text" required>
  <br>
  <input type="submit" value="Submit">
</form>
```
<br>

해당 텍스트 박스가 렌더되고, 아무런 값도 넣지 않은 채 submit을 시도하면 경고 메세지가 발생해요.

<form action="/example.html" method="POST">
  <label for="allergies">Do you have any dietary restrictions?</label>
  <br>
  <input id="allergies" name="allergies" type="text" required>
  <br>
  <input type="submit" value="Submit">
</form>
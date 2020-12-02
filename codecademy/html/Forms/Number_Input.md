## Number Input
---
`<input>` 요소에서 두 개의 `type` 속성을 사용할 수 있게 됐어요. 하지만, 사용자들이 숫자만 입력하기를 원할지도 모르는 상황이 있어요. 이 경우 `type` 속성의 값을 `number`로 지정합니다!
<br>
<br>

`<input>` 요소에서 `type="number"`를 지정하면, 사용자가 입력 필드에 입력하는 것을 숫자(및 산술 기호 등)로 제한할 수 있어요. 입력 필드 내부에 화살표를 생성하여 `<step>` 속성을 사용함으로써 값을 증감시키는 필드도 제공할 수 있어요.
<br>
<br>

```html
<form>
  <label for="years">Years of experience:</label>
  <input id="years" name="years" type="number" step="1">
</form>
```
<br>

코드의 결과는 아래와 같아요.
<form>
  <label for="years">Years of experience:</label>
  <input id="years" name="years" type="number" step="1">
</form>
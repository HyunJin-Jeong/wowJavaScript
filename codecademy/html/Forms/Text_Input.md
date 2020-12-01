## Text Input
---
만약 우리가 `<form>`에 입력 필드를 만들고 싶다면, `<input>` 요소의 도움이 필요할 것이에요.
<br>
<br>

`<input>` 요소는 웹 페이지에서 렌더링하는 방식과 받아들일 수 있는 데이터의 종류를 결정하는 `type` 속성이 있어요.
<br>
<br>

우리가 확인 할 `type` 속성의 첫 번째 값은 `text`예요. `<input>` 요소를 `type="text"`와 함께 만들 때, 사용자가 입력할 수 있는 입력 창을 렌더링해요. 우리가 `<input>`에 대한 `name` 속성을 포함하는 것도 중요하지만, `name` 속성이 없으면 `<input>` 요소에 있는 정보는 `<form>`을 제출할 때 전송되지 않아요.
<br>
<br>

```html
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field">
</form>
```
<br>

아래는 웹 페이지에서 렌더링된 양식이 어떻게 보이는지에 대한 결과예요. 처음 로드하면 빈 박스가 나오죠.
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field">
</form>

<br>

사용자가 `<input>` 요소에 입력하면, `value` 속성의 값이 텍스트 필드에 입력되는 값이 돼요. `value` 속성의 값은 `name` 속성 값과 쌍을 이루며, `form`을 제출할 때, 텍스트로 전송됩니다.
<br>
<br>

만약, 텍스트 필드에 `Text for the test`라는 텍스트를 입력하고 `form`을 제출하면, `name` 속성의 값이 `first-text-field`이고, `value`의 값이 `Text for the test`이기 때문에 `"first-text-field=Text for the test"`라는 텍스트가 `/example.html` 파일로 전송됩니다!
<br>
<br>

우리가 `value` 속성에 기본적인 값을 할당할 수도 있어요. `form`을 처음 봤을 때, 텍스트 필드가 채워져있는 상태일 수 있도록 기본값을 할당하는 것이죠.
```html
<form action="/example.html" method="POST">
  <input type="text" name="second-text-field" value="Default text">
</form>
```
<br>

위 예시를 그대로 재현하면, 아래와 같아요.
<form action="/example.html" method="POST">
  <input type="text" name="second-text-field" value="Default text">
</form>
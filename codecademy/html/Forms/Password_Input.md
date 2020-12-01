## Password Input
---
우리가 비밀번호나 PIN과 같은 민감한 정보를 `<form>`에 넣어야 하는 것을 생각해 봐요. 우리는 우리의 정보가 누군가에게 보여지길 원치 않을 거예요. 다행히도, `<input>`을 위한 `type="password"`라는 속성이 있답니다!
<br>
<br>

`<input type="password">` 요소는 우리가 텍스트로 입력하는 모든 문자를 `*` 또는 `dot`으로 처리해줘요.
<br>
<br>

```html
<form>
  <label for="user-password">Password:</label>
  <input id="user-password" type="password" name="user-password" value="test">
</form>
```
예시 코드는 아래와 같이 표현된답니다.
<form>
  <label for="user-password">Password:</label>
  <input id="user-password" type="password" name="user-password" value="test">
</form>
<br>
<br>

암호 필드가 텍스트를 보이지 않게 하더라도, `form`을 제출하면 텍스트 값이 정상적으로 전송돼요. 즉, 비밀번호 필드에 `"test2"`를 입력하면, `form`의 다른 정보와 함께 `"user-password=test2"`가 전송됩니다.
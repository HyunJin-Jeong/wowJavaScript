## Checking Text Length
---
이전에 우리는 `min`과 `max`를 설정하여 숫자 필드에 최대 값과 최소 값을 할당했지만, 텍스트 필드에 대해서는 어떻게 할까요? 우리는 사용자들이 일정 수 이상의 문자를 입력하는 것을 원하지 않는 경우가 있을 거예요. 그리고, 최소 문자 수를 설정하기 원할 수도 있죠. 기분이 좋게도, HTML5에 해당 상황을 위한 기능이 내장되어 있어요.
<br>
<br>

만약, 최소 문자 수를 설정하기 원한다면, 텍스트 필드에 `minlength` 속성을 추가 후 최소 값을 설정하면 돼요. 반대로, 최대 문자 수도 마찬가지예요. 텍스트 필드에 `maxlength` 속성을 추가하고, 최대 값을 입력하면 되죠.
<br>
<br>

```html
<form action="./example.html" method="POST">
  <label for="summary">Summarize your fellings in less than 250 characters</label>
  <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>
  <input type="submit" value="submit">
</form>
```

해당 코드에서 유저가 최소 문자 수를 충족하지 않은 채로 `<form>`을 `submit`하면, 경고 메세지가 발생해요.

<form action="./example.html" method="POST">
  <label for="summary">Summarize your fellings in less than 250 characters</label>
  <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>
  <input type="submit" value="submit">
</form>
<br>

그리고 최대 문자 수 이상을 입력하려고 하면, 경고 메세지까지 발생하진 않지만 입력할 수 없어요.
## Radio Button Input
---
사용자에게 여러 옵션을 제시하고, 사용자가 하나 이상의 옵션을 선택하도록 하면, 체크박스가 잘 동작해요. 하지만, 그들이 이용약관에 동의하는지 동의하지 않는지 등, 여러 옵션 중에서 하나만 선택할 수 있도록 해야 하는 경우가 있어요.
<br>
<br>

```html
<form>
  <p>What is sum of 1 + 1?</p>
  <input type="radio" id="two" name="answer" value="2">
  <label for="two">2</label>
  <br>
  <input type="radio" id="eleven" name="answer" value="11">
  <label for="eleven">11</label>
</form>
```
<br>

위 코드는 아래와 같이 표현돼요.

<form>
  <p>What is sum of 1 + 1?</p>
  <input type="radio" id="two" name="answer" value="2">
  <label for="two">2</label>
  <br>
  <input type="radio" id="eleven" name="answer" value="11">
  <label for="eleven">11</label>
</form>
<br>

코드에서 참고할 점은, `radio buttons`가 값을 표시하지 않는다는 것이죠. 그렇기 때문에 `radio button`의 값을 `<label>`로 표현해준 것이에요. 해당 버튼을 그룹화하기 위해, 그들에게 동일한 이름을 할당하고, 그 그룹에서 하나의 라디오 버튼만 선택할 수 있어요.
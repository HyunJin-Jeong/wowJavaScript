## Checkbox Input
---
지금까지 우리가 사용한 `input type`은 모두 `single choices` 였어요. 그러나 사용자에게 여러 옵션을 제공하고 원하는 수의 옵션을 선택할 수 있도록하면 어떻게 할까요? 체크박스를 사용할 수 있답니다! `<form>`태그에서 `<input>` 요소를 설정할 때, `type="checkbox"`로 하면 돼요.
<br>
<br>

```html
<form>
  <p>Choose your pizza toppings:</p>
  <label for="cheese">Extra cheese</label>
  <input id="cheese" name="topping" type="checkbox" value="cheese">
  <br>
  <label for="pepperoni">Pepperoni</label>
  <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
  <br>
  <label for="anchovy">Anchovy</label>
  <input id="anchovy" name="anchovy" type="checkbox" value="anchovy">
</form>
```
<br>

아래와 같이 렌더된답니다.

<form>
  <p>Choose your pizza toppings:</p>
  <label for="cheese">Extra cheese</label>
  <input id="cheese" name="topping" type="checkbox" value="cheese">
  <br>
  <label for="pepperoni">Pepperoni</label>
  <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
  <br>
  <label for="anchovy">Anchovy</label>
  <input id="anchovy" name="anchovy" type="checkbox" value="anchovy">
</form>
<br>

- `value`로 체크박스의 속성 값을 할당했어요. 이러한 값은 `form` 자체에 보이지 않으므로, `<label>`을 사용하여 체크박스를 식별하는게 중요하죠.

- 각 `<input>`에는 `name` 속성과 같은 값이 있어요. 각 체크박스에 동일한 `name`을 사용하면, `<input>`이 함께 그룹화돼요. 하지만, 각 `<input>` 마다 `<label>`과 쌍인 고유 `<id>`가 있어요.
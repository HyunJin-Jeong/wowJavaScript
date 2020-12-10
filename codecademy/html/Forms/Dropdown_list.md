## Dropdown list
---
`Radio buttons`는 사용자들이 몇 가지 눈에 보이는 옵션 중에서 한 가지 옵션을 선택하기를 원한다면 좋지만, 우리가 모든 옵션 목록을 가지고 있다고 상상해보자! 이러한 상황은 빠르게 추적할 수 있는 많은 `radio buttons`로 이어질 수 있어요.
<br>
<br>

이를 대체하는 방법으로 `dropdown list`를 사용하여 구성된 리스트의 옵션 중 한 가지를 선택할 수 있게 허용해요.
<br>
<br>

```html
<form>
  <label for="lunch">What's for lunch?</label>
  <select id="lunch" name="lunch">
    <option value="pizza">Pizza</option>
    <option value="curry">Curry</option>
    <option value="salad">Salad</option>
    <option value="ramen">Ramen</option>
    <option value="tacos">Tacos</option>
  </select>
</form>
```
<br>

위 코드는 아래와 같이 표현돼요.

<form>
  <label for="lunch">What's for lunch?</label>
  <select id="lunch" name="lunch">
    <option value="pizza">Pizza</option>
    <option value="curry">Curry</option>
    <option value="salad">Salad</option>
    <option value="ramen">Ramen</option>
    <option value="tacos">Tacos</option>
  </select>
</form>
<br>

만약, 첫 번째 옵션이 포함된 필드를 클릭하면, 여러 필드가 펼처질 거예요.
<br>
<br>

코드에서, `<select>` 요소를 사용하여 드롭다운 목록을 만든다는 것을 주의하세요. 드롭다운 목록을 채우기 위해 각각의 `value` 속성을 가진 여러 `<option>`을 추가하죠. 기본적으로 이러한 옵션 중에서 하나만 선택할 수 있어요.
<br>
<br>

렌더되는 텍스트는 각 `<option>` 태그의 사이에 있어요. 하지만, `<form>`에 사용되는 `value` 속성의 값이죠.(텍스트와 값은 대문자화의 차이가 있어요) `<form>`이 제출되면, 해당 입력 필드의 정보는 `<select>`의 `name`과 `<select>`의 `value`를 이용하여 송신돼요. 예를 들어, 만약 유저가 드롭다운 리스트에서 `Pizza`를 선택했을 때 송신되는 정보는 `"lunch=pizze"`랍니다.
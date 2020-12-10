## Datalist Input
---
구성된 드롭다운 목록이 있더라도 목록에 옵션이 많다면, 사용자가 전체 목록을 스크롤하여 하나의 옵션을 찾는 것을 어려워할 수 있어요. 거기서 `<datalist>` 요소를 사용하면 편리해요!
<br>
<br>

`<datalist>`는 `<input type="text">` 요소와 함께 사용돼요. `<input>`은 사용자가 `<datalist>`에 입력하여 옵션을 필터링할 수 있는 텍스트 필드로 만들어요.
<br>
<br>

```html
<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">
  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Barcelona"></option>
    <option value="Mexico city"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>
  </datalist>
</form>
```
<br>

위 코드에서, 우리는 `list` 속성을 가진 `<input>`을 사용했어요. `<input>`은 `<input>`의 `list` 속성과 `<datalist>`의 `id`를 통해 `<datalist>`와 연관돼요.
<br>
<br>

위 코드는 아래와 같이 렌더돼요.

<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">
  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Barcelona"></option>
    <option value="Mexico city"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>
  </datalist>
</form>
<br>

`<select>`와 `<datalist>`는 어느 정도 비슷한 점이 있지만, 몇 가지 큰 차이점이 있어요. 관련 `<input>` 요소에서 사용자는 입력 필드에 입력하여 특정 옵션을 검색할 수 있죠. `<option>`에서 어느 내용도 일치하지 않아도 사용자는 입력한 내용을 그대로 사용할 수 있어요. 해당 폼이 제출되면, `<input>`의 `name`과 선택한 옵션의 `value`, 그리고 사용자가 입력한 `value` 등이 쌍으로 송신돼요.
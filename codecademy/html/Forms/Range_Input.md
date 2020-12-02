## Range Input
---
만약 사용자가 원하는 수만큼 입력해도 좋다면, `<input type="number">`를 사용하는 것은 좋아요. 하지만, 사용자가 입력할 수 있는 숫자를 제한하기 위해선 다른 유형의 값을 사용해야 합니다. 우리가 사용할 수 있는 또 다른 `type` 속성의 값은 슬라이더를 만드는 `range`입니다!
<br>
<br>

슬라이더에 최솟값과 최댓값을 설정하려면, `<input>` 요소에 `min`과 `max` 속성을 추가하세요. 또, `step` 속성을 할당하여 슬라이더가 얼마나 부드럽게, 유동적으로 작동하는지 컨트롤할 수도 있어요. `step` 값이 작을 수록 슬라이더가 더 유동적인 반면, `step` 값이 크면 더 눈에 띄게 움직이죠.
<br>
<br>

```html
<form>
  <label for="volume"> Volume Control</label>
  <input id="volume" type="range" name="volume" min="0" max="100" step="1">
</form>
```
위 코드는 아래와 같아요.
<form>
  <label for="volume"> Volume Control</label>
  <input id="volume" type="range" name="volume" min="0" max="100" step="1">
</form>
<br>

위 예시는 슬라이더가 하나씩 움직일 때마다 `<input>`의 `value` 속성이 변해요.
## Adding a Label
---
이전 학습에서, 우리는 `<input>` 요소를 만들었지만, `<input>` 요소가 어떻게 쓰이는지 설명하기 위한 어떤 것도 포함시키지 않았어요. 우리는 `<input>`이 어떤 용도로 사용되는지 고유한 이름을 정하는 `<label>` 요소를 사용할 수 있답니다.
<br>
<br>

`<label>` 요소는 opening tag와 closing tag, 그리고 각 태그 사이로 텍스트를 표시해요. `<label>`과 `<input>`을 연관시키기 위해서 `<input>`에는 `id` 속성이 필요해요. 그 후, `<label>` 요소의 `for` 속성을 `<input>`의 `id` 속성 값으로 할당해요.
<br>
<br>

```html
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input id="meal" type="text" name="food">
</form>
```
<br>

위 코드는 아래와 같이 렌더돼요.
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input id="meal" type="text" name="food">
</form>
<br>

이제, 사용자는 `<input>` 요소가 무엇에 쓰이는지 알게 됐어요! `<label>`을 사용하는 또 다른 이점은 요소를 클릭했을 때, 강조와 함께 선택돼요!
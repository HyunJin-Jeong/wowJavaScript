## Divs
---
HTML에서 가장 인기가 많은 요소는 `<div>`입니다. `<div>`는 `division`의 줄임말임과 동시에 페이지를 섹션으로 나누는 컨테이너를 뜻하죠. 이 섹션은 HTML의 요소를 그룹화하기 매우 유용해요.

```html
<body>
    <div>
        <h1>Why use divs?</h1>
        <p>Greate for grouping elements!</p>
    </div>
</body>
```
<br>

`<div>`는 시각적으로 표현되는 것은 아니지만, HTML 요소에 커스텀 스타일을 적용하고자 할 때 매우 유용해요. `<div>`는 HTML 요소를 그룹화 해 내부 모든 HTML 요소에 동일한 스타일을 적용할 수 있게 해줘요. 또, 우리는 전체적으로 `<div>`를 스타일링 할 수 있죠. CSS를 배우면 알게 될 겁니다!
<br>
<br>

`<div>`는 모든 텍스트와 또 다른 HTML 요소, 링크, 이미지, 비디오 등을 포함할 수 있어요. `<div>` 요소를 안에 중첩할 때는 항상 들여쓰기로 헷갈리지 않게 한다는 것을 기억하세요.
<br>
<br>

```html
<body>
  <h1>The Brown Bear</h1>
  <div>
    <h2>About Brown Bears</h2>
    <h3>Species</h3>
    <h3>Features</h3>
  </div>
  <div>
    <h2>Habitat</h2>
    <h3>Countries with Large Brown Bear Populations</h3>
    <h3>Countries with Small Brown Bear Populations</h3>
  </div>
  <div>
    <h2>Media</h2>
  </div>
</body>
```
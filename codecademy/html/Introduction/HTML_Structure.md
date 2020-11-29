## HTML Structure
---
HTML은 가족적인 트리 관계의 모음으로 구성되어요. 지난 연습에, `<body>` 태그 안에 `<p>` 태그를 넣었어요. 한 요소가 다른 요소 내부에 포함되어 있을 때, 그 요소는 자식으로 간주돼요. 자식 요소는 부모 요소 내부에 내포되어 있다고 말해요.
<br>
<br>

```html
<body>
    <p>This paragraph is a child of the body</p>
</body>
```
위 예시에서, `<p>`는 `<body>` 내에서 사용되었어요. `<p>`는 `<body>`의 자식으로 간주되고, `<body>`는 부모로 간주되어요. 또 가독성을 높이기 위해 `space`를 이용하여 들여쓰기를 합니다.
<br>
<br>

여러 단계의 조직화가 이루어지기 때문에, 이런 비유는 손자, 증손자, 그 이상으로 확장될 수 있어요. 이렇게 원소와 원소의 관계를 나타내는 것을 `계층구조`라고 합니다.
<br>
<br>

```html
<body>
    <div>
        <h1>Sibling to p, but also grandchild of body</h1>
        <p>Sibling to h1, but also grandchild of body</p>
    </div>
</body>
```
예시 안에서, `<body>`는 `<div>`의 부모예요. 그리고 `<h1>`과 `<p>`는 모두 `<div>`의 자식들이죠. 왜냐하면 `<h1>`과 `<p>`는 속한 계층이 같아 형제로 인식되고, `<body>`의 손자이기 때문이죠.
<br>
<br>

하위 요소들은 그들의 부모 요소로부터 행동과 스타일링을 이어받을 수 있기 때문에 HTML 계층을 이해하는 것이 중요해요. CSS를 접하기 시작하면, 웹페이지 계층 구조에 대해 자세히 알게 될 것입니다!
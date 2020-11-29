## Whitespace
---
HTML 파일의 코드가 커질 수록 요소들이 어떻게 연관되어 있는지 추적하기가 점점 어려워져요.프로그래머들은 두 가지 방법을 사용하여 요소들 사이의 관계를 시각화합니다!
<br>
`Whitespace` and `Indentation`
<br>
<br>

두 방법은 모두 브라우저에서 요소의 위치가 `index.html` 파일의 공백과 들여쓰기 양과 무관하다는 점을 활용해요.
<br>
<br>

예를 들어, 웹 페이지의 두 개의 `paragraphs` 사이의 공간을 늘리고 싶을 때, `index.html` 파일의 `paragraph elements` 사이에 공백을 추가해도 이 작업을 수행할 수 없어요. 브라우저는 페이지를 렌더링할 때, HTML 파일의 공백을 무시하기 때문에 코드를 쉽게 읽고 따라 할 수 있는 방법으로 사용할 수 있죠.
<br>
<br>

예시를 봅시다!
```html
<body><p>Paragraph 1</p><p>Paragraph 2</p></body>
```
위 예시는 동작하기에 문제는 없지만, 읽기에 굉장히 불편해요!
<br>
<br>

```html
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</body>
```
이 예시는 각 요소가 각 줄에 존재하기 때문에 읽기가 더 쉬워요. 첫 번째 예시는 요소를 식별하기 위해 코드 전체를 읽어야 했지만, 이 예시는 `body` 태그와 두 `paragraph`를 쉽게 식별할 수 있었어요.
<br>
<br>

브라우저는 위 두 예제를 아래와 같이 표시해요.
```
Paragraph 1
Paragraph 2
```
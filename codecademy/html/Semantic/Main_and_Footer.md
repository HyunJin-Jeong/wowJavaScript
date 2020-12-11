## Main and Footer
---
`<main>`과 `<footer>`같은 요소가 있어요. 이 요소들은 `<nav>`, `<header>`와 함께 기존 웹 개발 표준에 기초하여 요소가 어디에 위치하는지 설명하는 데 도움이 돼요.
<br>
<br>

`<main>` 요소는 웹 페이지에 콘텐츠를 캡슐화하는 데 사용돼요. 그 태그는 웹 페이지의 `<footer>`, `<nav>`와는 별개이며, 주요 내용이 포함되어 있지 않기 때문이에요. `<div>`요소와 반대로 `<main>`을 사용하여 스크린 리더와 웹 브라우저는 태그 안에 있는 것이 무엇이든 콘텐츠의 메인이 된다는 것을 더 잘 식별할 수 있어요.
<br>
<br>

```html
<main>
  <header>
    <h1>Types of Sports</h1>
  </header>
  <article>
    <h3>Baseball</h3>
    <p>The first game of baseball was played in Cooperstown, New York in the summer of 1839.</p>
  </article>
</main>
```

위 코드에서 `<main>`은 페이지와 관련된 가장 중요한 정보를 담고 있는 `<article>`과 `<header>` 태그를 포함해요.
<br>
<br>

제목 정보 맨 아래 있는 콘텐츠는 `footer`라고 하며, `<footer>` 요소로 표시해요. `footer`가 포함하는 정보는 아래와 같아요.

- 연락처 정보

- 저작권 정보

- 이용 약관

- 사이트 맵

- 맨 위 링크 참조

<br>

```html
<footer>
  <p>Email me at hyun0524e@naver.com</p>
</footer>
```

위 예시에서 `footer`는 연락처 정보를 포함하여 사용했어요. `<footer>` 태그는 `<main>`요소와 분리되어 있으며, 일반적으로 콘텐츠의 하단에 위치해요.
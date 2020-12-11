## Header and Nav
---
웹 페이지 구조에 도움이 되는 몇 가지 시멘틱 요소를 살펴볼게요. `<header>`는 `navigational links` 또는 `<h1>`부터 `<h6>` 헤딩을 푸홈하는 콘텐츠를 위한 유용성을 포함해요.
<br>
<br>

아래의 예시는 `<header>` 사용을 보여준 것이에요.

```html
<header>
  <h1>Everything you need to know about pizza!</h1>
</header>
```
<br>

`<header>` 태그 대신 `<div>` 태그를 사용하는 아래 예시와 비교할 수도 있어요.

```html
<div id="header">
  <h1>Everything you need to know about pizza!</h1>
</div>
```
<br>

`<heading>` 태그를 사용하면, 우리 코드를 읽기 더 쉬워지죠. 태그 안에 무엇이 있는지에 대한 세부 사항을 제공하지 않는 `<div>` 태그와 달리, `<h1>`의 상위 태그 안에 무엇이 있는지 식별하는 것이 훨씬 쉽죠.
<br>
<br>

`<nav>`는 콘텐츠의 테이블과 메뉴와 같은 안내 링크 블록을 정의하기 위해 사용해요. 참고로, `<nav>`는 `<header>` 요소 안에서 사용하지만, 따로 사용할 수도 있다는 점에 유의하세요.
<br>
<br>

```html
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>
```
<br>

`<nav>`를 사용하여 네비게이션 링크에 라벨을 달고, 우리만을 위한 것이 아니라 웹 브라우저 또는 스크린 리더도 코드를 읽기 쉬워할 것이에요.
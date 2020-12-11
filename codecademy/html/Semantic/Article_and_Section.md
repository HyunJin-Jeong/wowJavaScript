## Article and Section
---
이제 시멘틱 HTML의 `body`를 확인했고, `body` 내에서 무엇을 할 수 있는지 초점을 맞추죠. 두 개의 요소인 `<section>`과 `<article>`에 초점을 맞출게요.
<br>
<br>

`<section>`은 챕터와 제목, 또는 같은 주제를 가진 문서의 다른 영역과 같은 요소를 정의해요. 예를 들어, 크리켓에 관한 기사처럼 같은 주제를 가진 콘텐츠는 하나의 `<section>`에 들어갈 수 있어요. 웹 사이트의 홈페이지는 소개, 뉴스 항목 및 연락처 정보를 위한 섹션으로 나눌 수 있죠.
<br>
<br>

```html
<section>
  <h2>Fun Facts About Crickets</h2>
</section>
```
<br>

위 코드에서 코드를 캡슐화하는 `<section>` 요소를 만들었어요. 그리고 `<section>` 요소에 제목으로 `<h2>` 요소를 추가했죠.
<br>
<br>

`<article>` 요소는 스스로 이치에 맞는 내용을 담고 있어요. `<article>`은 기사, 블로그, 댓글, 잡지 등의 콘텐츠를 담을 수 있죠. `<article>` 태그는 스크린 리더를 사용하는 누군가가 기사 내용이 어디서 시작되고, 어디서 끝나는지 이해하는 데 도움이 될 거예요.
<br>
<br>

```html
<section>
  <h2>Fun Facts About Crickets</h2>
  <article>
    <p>A single match of cricket can last up to 5 days.</p>
  </article>
</section>
```
<br>

위 코드에서 `<section>`. 안에 크리켓에 대한 사실이 위치했으며, `<article>` 요소에 포함했어요. `<section>` 요소도 컨텍스트에 따라 `<article>` 요소에 배치될 수 있다는 점을 참고하세요!
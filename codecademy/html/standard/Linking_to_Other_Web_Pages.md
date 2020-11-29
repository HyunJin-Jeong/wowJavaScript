## Linking to Other Web Pages
---
HTML(또는 인터넷)의 강력한 점 중 하나는 다른 웹 페이지에 연결할 수 있는 점이에요.
<br>
<br>

우리는 `anchor element`(`<a>`)를 추가하고, 링크의 텍스트를 opening tag와 closing tag 사이에 포함시켜 웹 페이지에 링크를 추가할 수 있어요.
```html
<a>This is a link to Wikipedia</a>
```
하지만 위 예의 링크는 불완전해요. 실제 위키피디아로 접속할 수 있는 URL이 없는 경우 위 링크가 어떻게 작동해야 할까요?
<br>
<br>

위 예시의 `anchor element`는 `href` 속성이 빠져있어요. 이 속성은 `hyperlink reference`를 나타내며, 특정 경로, 또는 파일의 주소로 연결하는 데 사용돼요. 그 경로로 종종 `URL`을 제공해요.
<br>
<br>

```html
<a href="https://www.wikipedia.org/">This is a link to Wikipedia</a>
```
이 예시는 `href` 속성에 `https://www.wikipedia.org/`을 추가하여 위키피디아로 연결할 수 있게 됐어요!
## Displaying Text
---
HTML에서 Text를 보여주고 싶다면, `paragraph` 또는 `span`을 이용해요.

- `Paragraphs`(`<p>`)는 일반 텍스트 블록이 포함되어 있어요.

- `<span>`은 텍스트의 짧은 조각이나 다른 HTML을 포함해요. 그것들은 다른 콘텐츠와 같은 선상에 있는 작은 콘텐츠들을 분리하는데 사용됩니다.

<br>

아래 각 요소를 확인해 보세요!
```html
<div>
    <h1>Technology</h1>
<div>
<div>
    <p><span>Self-driving cars</span> are anticipated to replace up to 2 million jobs over the next two decades.</p>
</div>
```

<br>

위 예시에서, 두 개의 `<div>`가 있어요. 두 번째 `<div>`는 `<p>`와 `<span>Self-driving cars</span>`를 포함하고 있죠. 해당 `<span>` 요소는 `<p>`의 나머지 텍스트와 `"Self-driving cars"`를 구분해요.
<br>
<br>

같은 줄에 있는 특정 내용을 대상으로 할 때, `<span>`을 사용하는 것이 가장 좋아요. 만약, 콘텐츠를 블록으로 나누고 싶다면, `<div>`를 사용하는 것이 더 좋아요.
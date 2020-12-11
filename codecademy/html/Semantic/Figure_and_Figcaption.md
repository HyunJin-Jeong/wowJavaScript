## Figure and Figcaption
---
`<aside>`로 주요 내용 옆에 추가 정보를 넣을 수 있다는 것을 알게 되었는데, 이미지나 삽화를 추가하고자 한다면 어떨까요? 거기서 `<figure>`와 `<figcpation>`가 사용돼요.
<br>
<br>

`<figure>`는 문서의 주요 흐름에서 참조되는 이미지, 일러스트레이션, 다이어그램, 코드 등의 매체를 캡슐화하는 데 사용돼요.
<br>
<br>

```html
<figure>
  <img src="overwatch.jpg"/>
</figure>
```
<br>

위 코드에서 `<img>` 태그를 캡슐화할 수 있도록 `<figure>` 요소를 사용했어요. `<img>` 태그를 사용하여 웹 페이지에 이미지를 삽입했죠. 이미지의 경로를 연결할 수 있도록 `<img>` 태그 안에서 `src` 속성을 사용했어요.
<br>
<br>

`<figcaption>`을 사용하여 이미지에 설명을 추가할 수 있어요.
<br>
<br>

`<figcaption>`은 `<figure>` 태그에 있는 매체를 설명하는 데 사용되는 요소예요. 보통 `<figcaption>`은 `<figure>` 안에 들어가요. 이것은 내용을 기술하기 위해 `<p>` 요소를 사용하는 것과는 다르죠. 만약, `<figure>`의 위치를 바꾸기로 결정한다면, `<figcaption>`이 그림과 함께 이동하고, `figure`에서 `paragraph` 태그가 옮겨질 수 있죠. 이미지를 그룹화하는 데 유용해요.
<br>
<br>

```html
<figure>
  <img src="overwatch.jpg">
  <figcaption>This picture shows characters from Overwatch.</figcaption>
</figure>
```
<br>

위 예에서, 이전 예의 나온 이미지를 설명하기 위해 `<figure>` 요소에 `<figcaption>`을 추가했어요.
<br>
<br>

`<figure>`의 내용은 문서 주요 흐름과 상관있지만, 위치는 독립적이죠. 문서 흐름에 영향을 주지 않고 제거하거나 다른 곳으로 옮길 수 있다는 뜻이에요.
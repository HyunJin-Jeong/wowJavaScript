## Textarea element
---
`type="text"`가 있는 `<input>` 요소는 사용자가 정보를 입력할 수 있는 단일 행 입력 필드를 만들어요. 하지만, 블로그 게시물처럼 더 많은 정보를 써야 하는 경우도 있어요. 그런 경우에는 `<input>`을 사용하는 대신 `<textarea>`를 사용할 수 있어요.
<br>
<br>

`<textarea>` 요소는 사용자가 더 많은 텍스트를 쓸 수 있도록 더 큰 텍스트 필드를 만드는 데 사용돼요. `rows`와 `cols`를 추가하여 `<textarea>`에 대한 행과 열의 양을 결정할 수 있어요.
<br>
<br>

```html
<form>
  <label for="blog">New Blog Post:</label>
  <br>
  <textarea id="blog" name="blog" rows="5" cols="30">
  </textarea>
</form>
```

위 코드는 5개의 행과 30개의 열을 갖고 있는 빈 `<textarea>`은 아래와 같이 페이지로 렌더링해요.

<form>
  <label for="blog">New Blog Post:</label>
  <br>
  <textarea id="blog" name="blog" rows="5" cols="30">
  </textarea>
</form>

더 큰 텍스트 필드를 원하면, 오른쪽 아래 모서리를 끌어서 확장할 수 있어요.
<br>
<br>

`form`을 제출할 때, `<textarea>`의 값은 박스 내의 작성된 텍스트예요. 만약, 기본적으로 작성되는 값을 원하면, `<textarea>`의 오프닝 태그와 클로징 태그 사이에 텍스트를 작성할 수 있답니다.

```html
<textarea>Adding default text</textarea>
```

이 코드는 `"Adding default text"`라는 텍스트를 미리 채워서 포함하는 `<textarea>`를 렌더링해요.
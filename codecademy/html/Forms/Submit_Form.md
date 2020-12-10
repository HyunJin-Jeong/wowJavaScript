## Submit Form
---
`form`의 목적은 제출될 정보를 수집하는 것임을 기억하세요. 그것이 `submit button`의 역할이에요. 사용자들은 `<form>`에 정보를 기입한 후 그것을 클릭해서 발송할 준비가 되면 클릭하죠. 이제 다양한 입력 요소를 만드는 방법에 대해 살펴보았으므로 `submit button`을 만드는 방법을 알아볼게요.
<br>
<br>

`<form>`에 `submit button`을 작성하려면, `<input>` 요소에서 `type`의 값을 `"submit"`으로 설정하면 됩니다.

```html
<form>
  <input type="submit" value="Send">
</form>
```

코드가 적용되어 렌더링하면 이런 모습이에요.

<form>
  <input type="submit" value="Send">
</form>
<br>

코드에서 `<input>`에 할당된 값이 `submit button`에 텍스트로 표시된다는 것을 참고하세요. 만약, `value` 요소가 없다면, 기본 텍스트로 `Submit`으로 표시된답니다.
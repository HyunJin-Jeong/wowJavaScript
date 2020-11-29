## Table Head
---
이전에 우리는 `table's headings`를 `table's body` 안에 보관했어요. 하지만, 테이블의 `body`를 분할할 때는 `thead` 요소를 사용해 테이블의 `column headings`를 분할하는 것이 옳은 방법이에요.
<br>
<br>

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">Saturday</th>
      <th scope="col">Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Morning</th>
      <td rowspan="2">Work</td>
      <td rowspan="3">Relax</td>
    </tr>
    <tr>
      <th scope="row">Afternoon</th>
    </tr>
    <tr>
      <th scope="row">Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
</table>
```
위 예시에서 새로운 요소는 `<thead>` 뿐이에요. 표제는 해당 요소 내부에 포함되어 있어요. `table's head`는 `table headings`을 포함하기 위해 여전히 행을 필요로 한다는 점에 주의하세요!
<br>
<br>

또한, `column headings`만 `<thead>` 요소 아래에 들어가요. `<th>` 요소의 `scope` 속성을 이용하여, `<th>` 요소가 `"row"` 제목으로 사용되는 지, `"col"` 제목으로 사용되는 지를 나타낼 수 있어요.
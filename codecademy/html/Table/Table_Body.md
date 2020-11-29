## Table Body
---
시간이 흐르면서 테이블은 많은 데이터를 포함할 수 있고, 매우 길어질 수 있어요. 이렇게 될 때, 테이블이 분할되어 관리가 용이하도록 할 수 있답니다.
<br>
<br>

긴 테이블은 `table body`를 나타내는 `tbody` 요소를 이용해 분할할 수 있어요.
<br>
<br>

`<tbody>` 요소는 `table headings`를 제외한 테이블의 모든 데이터를 포함해야 해요.
<br>
<br>

```html
<table>
  <tbody>
    <tr>
      <th></th>
      <th>Saturday</th>
      <th>Sunday</th>
    </tr>
    <tr>
      <th>Morning</th>
      <td rowspan="2">Work</td>
      <td rowspan="3">Relax</td>
    </tr>
    <tr>
     <th>Afternoon</th>
    </tr>
    <tr>
      <th>Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
</table>
```
예시에서, 테이블 데이터의 모든 것은 `table body` 요소와 함께 포함되었어요. 하지만, 표제 역시 `table body`에 보관되어 있다는 점을 주의하세요.
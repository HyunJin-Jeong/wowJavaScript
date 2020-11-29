## Table Footer
---
긴 테이블의 맨 아래를 `<tfoot>`으로 분할할 수 있어요.
<br>
<br>

```html
<table>
  <thead>
    <tr>
      <th>Quarter</th>
      <th>Revenue</th>
      <th>Costs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Q1</th>
      <td>$10M</td>
      <td>$7.5M</td>
    </tr>
    <tr>
      <th>Q2</th>
      <td>$12M</td>
      <td>$5M</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>$22M</td>
      <td>$12.5M</td>
    </tr>
  </tfoot>
</table>
```
위 예시의 `footer`는 테이블 안 데이터의 총 합을 나타내요. `Footers`는 종종 합과 차이, 그리고 기타 데이터의 결과를 포함하는 데 사용해요.
## Spanning Rows
---
데이터는 `rowspan` 속성을 사용해 여러 행에도 걸칠 수 있어요.
<br>
<br>

`rowspan` 속성은 여러 행에 걸쳐 있는 데이터에 사용돼요(ex: 특정 날짜에 이벤트가 여러 시간 동안 지속되는 등). 그것은 `colspan`과 마찬가지로 가로지르는 행의 수를 나타내는 정수를 받아들이죠.
<br>
<br>

```html
<table>
  <tr> <!-- Row 1 -->
    <th></th>
    <th>Saturday</th>
    <th>Sunday</th>
  </tr>
  <tr> <!-- Row 2 -->
    <th>Morning</th>
    <td rowspan="2">Work</td>
    <td rowspan="3">Relax</td>
  </tr>
  <tr> <!-- Row 3 -->
    <th>Afternoon</th>
  </tr>
  <tr> <!-- Row 4 -->
    <th>Evening</th>
    <td>Dinner</td>
  </tr>
</table>
```
위 예시는 네 개의 행이 있어요.

- 첫 번째 행: 빈 셀과 두 개의 컬럼 headings가 있습니다.

- 두 번째 행: `Saturday` 열 아래에 두 행에 걸쳐 있는 `Work`와 함께 `Morning` 표제가 포함되었어요. `Relax`는 `Sunday` 열 아래 세 행에 걸쳐 있습니다.

- 세 번째 행: `Afternoon` 표제만 있습니다.

- 네 번째 행: `Relax`가 옆 셀에 포함되기 때문에 `Dinner` 항목만 있습니다.
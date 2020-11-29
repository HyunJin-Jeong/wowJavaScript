## Spanning Columns
---
테이블에 여러 열에 걸쳐 있는 데이터가 포함되었다면 어떻게 할까요?
<br>
<br>

예를 들어, 개인 달력은 여러 시간 또는 며칠에 걸친 이벤트를 가질 수 있어요.
<br>
<br>

데이터는 `colspan` 속성을 사용하여 여러 컬럼에 포함될 수 있어요. 속성은 데이터가 가로지르는 컬럼의 수를 나타내는 정수를 허용해요.
<br>
<br>

```html
<table>
  <tr>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
  </tr>
  <tr>
    <td colspan="2">Out of Town</td>
    <td>Back in Town</td>
  </tr>
</table>
```
예시에서, 데이터 `Out of Town` spans는 `Monday`와 `Tuesday` 표제에 걸쳐 두 컬럼을 차지해요. 데이터 `Back in Town`은 `Wednesday` 표제 밑에 추가되었죠.
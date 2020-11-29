## Table Headings
---
테이블 데이터는 데이터가 나타내는 것을 설명하는 제목이 없으면 그닥 의미가 없어요.
<br>
<br>

그래서 우린, 행과 열에 대한 제목을 추가해요. `<th>` 요소를 통해 `table heading`을 사용할 수 있답니다.
<br>
<br>

`Table headings`는 관련 제목을 제외하고, 테이블 데이터 요소와 마찬가지로 사용돼요. 테이블 데이터와 마찬가지로 테이블 제목도 테이블 행 안에 배치해야 하죠.
<br>
<br>

```html
<table>
  <tr>
    <th></th>
    <th scope="col">Saturday</th>
    <th scope="col">Sunday</th>
  </tr>
  <tr>
    <th scope="row">Temperature</th>
    <td>73</td>
    <td>81</td>
  </tr>
</table>
```
위 코드에서 어떤 일이 일어났을까요?

먼저, `blank heading`, `Saturday heading`, 그리고 `Sunday heading` 등 세 개의 제목을 보유하기 위해 새로운 행이 추가됐어요. 빈 제목은 `table headings`을 해당 데이터 위에 올바르게 정렬하는 데 필요한 추가 `table cell`을 생성해요.
<br>
<br>

두 번째 행에서, `Temperature`라는 이름을 가진 `table heading`이 추가되었어요.
<br>
<br>

렌더링 시 위 코드는 아래처럼 나타날 거예요.
```
            |   Saturday    |    Sunday
--------------------------------------------
Temperature |   73          | 81
```
<br>

다음 두 값 중 하나를 사용할 수 있는 `scope` 속성이에요.

- `row` - 이 값은 제목이 행에 대한 것임을 분명히 합니다.

- `col` - 이 값은 제목이 열에 대한 것임을 분명히 합니다.

<br>

테이블의 HTML 코드는 처음엔 좀 이상하게 보일 수 있지만, 그것을 하나하나 분석하는 것은 코드를 더 이해할 수 있게 하는데 도움이 돼요.

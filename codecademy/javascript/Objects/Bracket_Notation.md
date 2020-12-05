## Bracket Notation
---
객체의 속성에 대해 접근할 수 있는 두 번째 방법은 괄호`[]`를 사용하는 것이죠.
<br>
<br>

아래는 우리가 배열의 요소로 접근하기 위해 사용했던 괄호 표기법이에요.

```javascript
["A", "B", "C"][0]; // Returns "A"
```
<br>

괄호 표기법으로 객체 속성에 접근하기 위해선 속성 이름을 문자열로 전달해요.

```javascript
spaceship["Fuel Type"];
```
<br>

숫자, 공백 또는 특수문자가 있는 `key`에 접근할 때는 괄호 표기법을 사용해야 해요. 이러한 상황에서 괄호 표기법이 없다면, 코드에는 오류가 발생할 것입니다!

```javascript
const spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Activity Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};

spaceship["Activity Duty"]; // Returns true
spaceship["Fuel Type"]; // Returns "Turbo Fuel"
spaceship["numCrew"]; // Returns 5
spaceship["test"]; // Returns undefined
```
<br>

괄호를 사용하면, 괄호 안의 변수를 사용하여 객체의 키를 선택할 수도 있죠. 함수를 사용할 때 유용할 수 있어요.

```javascript
let returnAnyProp = (objectName, propName) => objectName[propName];

returnsAnyProp(spaceship, "homePlanet");
// Returns "Earth"
```
<br>

만약 `dot`으로 `returnAnyProp` 함수를 사용하려 한다면, 컴퓨터는 `propName` 파라미터의 값이 아니라 해당 객체에서 `propName`의 키를 찾을 거예요.
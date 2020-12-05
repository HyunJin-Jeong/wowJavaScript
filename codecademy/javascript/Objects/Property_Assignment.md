## Property Assignment
---
일단 객체를 정의하고 나면, 작성한 모든 속성에 얽매이지 않아요. 정의한 후에도 계속해서 업데이트 할 수 있다는 뜻이죠.
<br>
<br>

`dot`, 괄호 또는 할당 연산자와 `=`를 통해 새로운 `key-value` 쌍을 객체에 추가하거나 기존 속성을 변경할 수 있어요.

```javascript
spaceship["Fuel Type"] = "vegetable oil";
space.color = "gold";
```
<br>

속성 값을 할당하는 케이스는 다음 두 가지 중 하나예요.

- 속성이 객체에 이미 존재하는 경우, 이전에 보유하던 값이 무엇이든 새로 할당되는 값으로 대체됩니다.

- 해당 이름의 속성이 없는 경우 새 속성이 객체에 추가됩니다.

<br>

중요한 것이 있어요. `const`와 함께 객체를 선언했을 때, 객체 자체를 재할당 할 수는 없답니다. 하지만, 객체의 값을 바꿀 수 있다는 것을 아는 것이 중요하죠. 그것은 우리가 새로운 속성을 추가하고, 거기에 있는 속성을 바꿀 수 있다는 것을 의미해요.
<br>
<br>

```javascript
const spaceship = {type: "shuttle"};

spaceship = {type: "alien"};
// TypeError: Assignment to constant variable.

spaceship.type = "alien";
// Changes the value of the type property

spaceship.speed = "Mach 5";
// reates a new key of 'speed' with a value of "Mach 5"
```
<br>

그리고, `delete`를 이용하여 객체의 속성도 삭제가 가능해요.

```javascript
const spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  misson: "Explore the universe",
};
```

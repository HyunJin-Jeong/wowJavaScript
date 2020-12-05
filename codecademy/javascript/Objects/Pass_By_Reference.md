## Pass By Reference
---
객체는 레퍼런스로 전달돼요. 이것은 어떤 객체에 할당된 변수를 한 함수에 인자로 전달할 때, 컴퓨터는 파라미터 이름을 해당 객체가 갖고 있는 메모리의 공간을 가리키는 것을 의미해요. 결과적으로 함수는 객체 속성을 변경하는 것이죠.(`const`로 할당한 변수도 마찬가지)
<br>
<br>

```javascript
const spaceship = {
  homePlanet: "Earth",
  color: "silver",
};

const paintIt = ojb => obj.color = "glorious gold"

paintIt(spaceship);
console.log(spaceship.color);
// Prints "glorious gold"
```
<br>

함수 `paintIt()`은 `spaceship` 객체의 `color` 속성을 변경해요. 하지만, `spaceship` 변수의 재할당은 해당 방식으로 작동하지 않아요.

```javascript
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};

const tryReassignment = obj => obj = {
  identified: false,
  "transport type": "flying",
};

tryReassignment(spaceship);
// The attempt at reassignment does not work.

console.log(spaceship);
// Prints { homePlanet: "Earth", color: "silver" }

spaceship = {
  identified: false,
  "transport type": "flying",
};
// Regular reassignment still works.
```

코드에서 무슨 일이 일어난 건지 확인해 봐요.

- `spaceship` 객체를 `let`으로 선언했어요. 그 것은 `identified`와 `"transport type"` 속성 재할당에 문제가 없기 위해서죠.

- 전달된 객체를 재할당하도록 만들어진 함수를 사용하여 동일한 작업을 시도했을 때, 재할당이 되지 않았어요.

- 그 함수에 `spaceship`을 전달했을 때, `obj`는 `spaceship` 객체의 메모리 위치에 대한 언급이 되었지만, `spaceship` 변수에 대한 언급은 아니였어요. `tryReassignment()` 함수의 `obj` 파라미터가 그 자체로 변수이기 때문이죠. `tryReassignment()` 함수에서는 `spaceship` 변수에 대해 전혀 알지 못해요.

- `tryReassignment()`에서 값을 재할당 했을 때, `obj` 파라미터는 `{identified: false, "transport type": "flying"}`으로 메모리 위치를 가리키는 반면 `spaceship` 변수는 이전 값과 달라지지 않았어요.

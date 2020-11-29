## Scope Pollution
---
항상 변수에 접근할 수 있도록 하는 것은 좋은 생각같지만, 너무 많은 `global variables`를 갖는 것은 프로그램에서 문제를 일으킬 수 있어요.
<br>
<br>

전역 변수를 선언할 때, `global namespace`로 이동해요. `global namespace`는 프로그램의 어디서든 변수에 접근할 수 있도록 합니다. 그 변수는 프로그램이 끝날 때까지 그곳에 남아있으며, `global namespace`가 빨리 채워질 수 있다는 것을 의미하죠.
<br>
<br>

`Scope pollution`은 `global namespace`에 존재하는 글로벌 변수가 너무 많거나 다른 범위에 걸쳐 변수를 재사용할 때 발생해요. `Scope pollution`은 다른 변수들에 접근하는 것을 어렵게 만들고 어떠한 사고에 대비시키는 역할을 해요.
<br>
<br>

```javascript
let num = 50;

const logNum = () => {
    num = 100;
    console.log(num); // Prints 100
}

logNum(); // Prints 100
console.log(num); // Prints 100
```
예시를 보면, `globally scoped variables`가 `local scope`인 다른 변수와 충돌하여 코드에서 예기치 않은 동작을 유발할 수 있어요.

- `num`이라는 변수를 선언했어요.

- `logNum()`을 선언한 뒤, 본문에 새로운 변수를 선언하려고 하지만 `let`을 사용하는 것을 깜빡했어요!!

- 우리는 `logNum()` 함수를 호출하면, `100`이라는 값을 재할당해요.

- 재할당 시 사용되는 `num`이라는 변수는 `global variable`에 접근해서 가져온 변수랍니다.

- 재할당이 허용되고 오류가 발생하지 않아도, 나중에 `num`을 사용하기로 결정하면 자신도 모르게 `num`의 새로운 값을 사용할 것이에요.

<br>

`Global scope`가 무엇인지 아는 것도 중요하지만, `global scope`에서 변수를 정의하지 않는 것이 제일 좋은 습관이에요.
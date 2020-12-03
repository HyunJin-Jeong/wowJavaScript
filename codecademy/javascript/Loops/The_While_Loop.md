## The While Loop
---
우리는 `for loop`가 아닌 다른 타입의 루프를 사용할 수 있어요. 바로, `while loop`입니다. `for loop`의 방식을 `while loop`로 변환하면 어떻게 될까요?
```javascript
// A for loop that prints 1, 2, 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne);
}

// A while loop that prints 1, 2, 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counter++;
}
```
<br>

`while loop`에서 어떤 일이 일어난 걸까요?

- 루프 돌기 전에 `counterTwo` 변수를 선언했어요. 해당 변수는 글로벌 스코프이기 때문에 `while loop` 안에서 접근이 가능해요.

- 루프에 나오는 `stopping condition`과 함께 시작돼요. 이것은 루프가 한 번씩 돌고나서 판단될 것이에요. 조건이 참으로 평가되는 동안 코드 블록은 계속 실행될 것이며, 거짓으로 평가되면 루프는 멈춥니다.

- 그 다음, 우리는 `counterTwo`를 콘솔에 출력하고, `counterTwo`를 증가시키는 루프 코드 블록을 갖고 있어요.

<br>

코드 블록 안에 `counterTwo`를 늘리지 않으면 어떻게 될까요? `counterTwo`는 항상 초기 값인 1을 가질 것이고, `stopping condition`인 `counterTwo < 4`는 계속해서 참으로 판단되어 루프는 멈추지 않을 것이죠. 이것은 `무한 루프`(`infinite loop`)라고 불리며, 우리가 피해야 할 요소죠. `무한 루프`는 컴퓨터의 처리 성능을 모두 차지하고, 잠재적으로 컴퓨터를 정지시킬 수 있어요.
<br>
<br>

그래서, 언제 `while loop`를 사용하는지 궁금한가요? 루프에 대한 문법은 루프가 몇 번 실행되어야 하는지 알 때가 가장 좋지만, 항상 미리 아는 것은 아니에요. 음식을 먹는 것을 생각해보면, 음식을 씹기 시작했을 때 배가 부르기 위해 필요한 횟수를 알지 못하는 것처럼, 루프가 결정되지 않은 횟수를 실행한다면, `while loop`는 최선의 선택이죠.
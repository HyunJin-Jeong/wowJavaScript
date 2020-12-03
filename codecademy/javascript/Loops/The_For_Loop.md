## The For Loop
---
같은 코드를 반복해서 사용하는 대신에, 루프는 우리가 컴퓨터들에게 스스로 주어진 코드 블록을 반복하라고 지시할 수 있게 해줘요. 그 중 한 가지 방법은 `for loop`를 사용하는 것이죠.
<br>
<br>

일반적인 `for loop`의 경우 세 가지 표현 모두에 나타나는 `iterator variable`를 포함해요. `iterator variable`을 초기화하여 정지 조건에 대해 확인하고, 루프를 반복하며 새 값을 할당해요. `iterator variable`은 어떤 이름도 가질 수 있지만, `descriptive`한 변수 이름을 사용하는 것이 가장 좋아요.
<br>
<br>

`for loop`에는 `;`로 구분된 세 개의 식이 괄호 안에 있어요.
<br>
<br>

- `initialization`은 루프를 시작하고 `iterator variable`을 선언하는 데도 사용할 수 있어요.

- `stopping condition`은 참으로 판단되면, 코드 블록이 실행되며 거짓으로 판단하면, 코드가 중지됩니다.

- `iteration statement`는 `iterator variable`을 업데이트하는 데 사용돼요.

<br>

```javascript
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
```
위 예시 코드의 결과는 아래와 같아요.
```
0
1
2
3
```
<br>

- `initialization`은 `let counter = 0`으로 설정되며, 루프는 0 부터 카운팅해요.

- `stopping condition`은 `counter < 4`로, `counter`가 4 미만일 때, 루프가 실행된다는 뜻이에요.

- `iteration statement`는 `counter++`입니다. 이는 각 루프 후 `counter`의 값이 1씩 증가한다는 것을 의미하죠.

- 코드 블록`{}`의 내용은 `console.log(counter)`이며, 상태가 `false`로 평가될 때까지 실행하죠. 물론 조건은 `counter`가 4보다 크거나 같으면 `false`로 평가됩니다! 즉, 상태가 거짓이 되는 점을 `stopping condition`이라고 부르기도 해요.

<br>

`for loop`는 프로그램으로 `0`, `1`, `2`, `3` 을 작성하게 해줘요.
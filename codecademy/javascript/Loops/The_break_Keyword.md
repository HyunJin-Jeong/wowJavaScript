## The break Keyword
---
우리가 강아지를 입양한다고 상상해봐요. 우리는 1년 동안 매일 보호소에 갔다가 마음에 드는 강아지가 없다면, 포기할 계획이죠. 하지만, 65일 째에 꿈의 강아지를 만난다면 어떨까요? 우린 단지 원래 계획이 1년 내내 가는 것이라고 해서 앞으로 300일 동안 계속 가고 싶지는 않을 것이죠. 루프를 위해 정지 조건이 충족되지 않았음에도 루프가 계속 실행되는 것을 막기 위해 `break`를 사용할 수 있어요.
<br>
<br>

`break` 키워드는 프로그램이 계속해서 루프하는 것을 막을 수 있어요.

```javascript
for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log("Banana");
}

console.log("Orange you glad I broke out the loop!");
```

위 코드의 결과는 아래와 같아요.

```
Banana
Banana
Banana
Orange you glad I broke out the loop!
```
<br>

`break`는 우리가 아주 큰 데이터 구조를 반복할 때 도움이 돼요. `break`가 있으면 정지 조건 외에 테스트 조건을 추가할 수 있고, 테스트 조건이 충족되면 루프를 빠져나갈 수 있어요.


## Looping in Reverse
---
만약 우리가 루프를 돌며, `3`, `2`, `1`, 그리고 `0`을 출력하고 싶다면 어떻게 할 건가요? 표현만 간단하게 수정해서 반대로 동작시킬 수 있답니다!
<br>
<br>

루프를 거꾸로 돌리기 위해서는 아래와 같은 과정이 필요해요.

- `iterator variable`의 `initialization`에서 원하는 가장 높은 값으로 설정해요.

- `iterator variable`이 원하는 크기보다 작은 경우 `stopping condition`을 설정하세요.

- `iterator variable`은 반복 후에 값을 줄이면 된답니다.

```javascript
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
```
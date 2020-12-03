## Do...While Statements
---
코드가 적어도 한 번 실행된 다음 초기화 후 특정 조건에 따라 반복되도록 하는 경우가 있어요. 그것이 바로 `do...while` 문의 역할이죠.
<br>
<br>

`do...while` 구문은 작업을 한 번 한 다음 지정된 조건이 더이상 충족되지 않을 때까지 계속 수행하라는 내용을 갖고 있어요.

```javascript
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
```

위 예시의 코드 블록에서 `countString` 변수에 `i` 변수의 문자열 형식을 추가하여 `countString` 변수를 변경하죠. 처음 코드 블록은 `do` 키워드에 의해 실행돼요. 그 다음, 조건에 대한 부분이 `true`로 판단되면, 계속 코드 블록을 실행하고, `false`로 판단되면, `looping`을 멈춥니다.
<br>
<br>

참고로, `while`과 `do...while`은 서로 다릅니다! `while loop`와 달리 `do...while`은 조건이 참으로 판단하기까지 적어도 한 번은 코드 블록을 실행해요.
<br>
<br>

```javascript
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
```
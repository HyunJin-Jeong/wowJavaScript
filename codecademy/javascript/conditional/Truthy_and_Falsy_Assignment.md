## Truthy and Falsy Assignment
---
`true`와 `false`로 판단할 수 있는 것은 가능성을 열어주는 일이에요.
<br>
<br>

만약, 우리가 웹 사이트가 있고 개인에 따라 인사말을 만들기 위해 사용자의 이름을 사용하고 싶다면 어떻게 할까요? 가끔 사용자의 계정이 없는 경우에 `username` 변수가 `falsy` 일 수 있어요.
<br>
아래 코드는 `username`이 정의되었는지 확인하고, 이름이 정의되지 않은 경우 기본 문자열을 할당해요.
```javascript
let defaultName;
if (userName) {
    defaultName = username;
} else {
    defaultName = "Stranger";
}
```
<br>

논리 연산자에 대한 지식을 이용하면 아래처럼 짧은 코드로 사용할 수 있어요. Javascript는 `boolean` 조건문에서 할당 시 `||` 연산자를 사용할 경우 변수에 `truthy` 값을 할당해요.
```javascript
let defaultName = username || "Stranger";
```
왜냐하면, `||` 연산자는 문장 왼쪽 상태를 먼저 체크하기 때문에 변수 `defaultName`은 `username` 값이 `truthy` 일 경우 해당 값이 할당되고, `falsy` 일 경우 `"Stranger"` 값이 할당돼요. 이 개념을 `short-circuit evaluation`이라고 부릅니다.
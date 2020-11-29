## Blocks and Scope
---
`Scope`에 대해서 이야기하기 전에 먼저 `Blocks`에 대해 이야기해야 해요.
<br>
<br>

함수 및 `if` 문에서 사용된 `blocks`를 본 적이 있을거예요. `Block`은 중괄호 내에서 발견되는 코드를 이야기해요. `Blocks`은 하나 이상의 문법을 그룹화 해 코드의 중요한 구조적 표식 역할을 할 수 있도록 도와줍니다.
```javascript
const logSkyColor = () => {
    console.log("blue"); // Prints "blue"
}
```
함수 본문은 실제로 `block of code`입니다.
<br>
<br>

```javascript
if (dusk) {
    console.log("pink"); // Prints "pink"
}
```
## Create a Variable: const
---
`const`는 상수(constant)의 줄임이고, ES6 부터 도입된 키워드예요. `var`와 `let`과 마찬가지로 모든 값을 변수에 저장할 수 있으며, 할당하는 방법 또한 동일한 구조를 따르죠.
```javascript
const myName = 'Hyunjin';
console.log(myName); // Prints 'Hyunjin'
```
<br>

하지만, `const`는 상수이기 때문에, 값을 다시 할당할 수 없습니다. 만약 `const`에 값을 재할당하려고 한다면, `TypeError`가 발생하게 될 거예요.
```
TypeError: Assignment to constant variable.
```
<br>

상수는 선언할 때, 값을 할당해야 해요. 우리가 값을 할당하지 않고 `const` 선언만 한다면, `SyntaxError` 에러가 발생한답니다.
```
SyntaxError: Missing initializer in const 
```
<br>

`let`과 `const` 중 어떤 방식을 택할지 고민한다면, 우리가 변수를 다시 할당하는지 생각을 해보면 됩니다. 만약 다시 할당해야 한다면, `let`을, 그렇지 않다면, `const`를 사용하세요!
## Method
---
Methods는 우리가 수행할 수 있는 작업이라는 것을 기억해야 합니다. Javascript는 다양한 `string methods`을 제공해요.
<br>
<br>

우리는 인스턴스를 추가하여 다음과 같은 방법을 호출하거나 사용하죠.
- the dot operator
- the name of the method
- opening and closing parentheses

<br>

아래와 같은 형태로 사용합니다!
```javascript
'example string'.methodName()
```
<br>

구문이 조금 친숙해 보이나요? 맞아요! 우리가 `console.log()`를 작성했을 때, `console` object에서 `.log()`라는 method를 사용했었죠.
<br>
`console.log()`의 실제 `string method`를 확인해보세요!
```javascript
console.log('hello'.toUpperCase()); // Prints 'HELLO'

console.log('Hey'.startsWith('H')); // Prints true
```
위 코드를 살펴봅시다.
- 첫 번째로, `toUpperCase()` method는 `'hello'` 문자열 인스턴스를 불러와요. 그 결과는 콘솔에 남겨집니다. 해당 method는 모든 문자를 대문자로 반환하는 역할을 한답니다.
- 두 번째로, `startsWith()` method는 `'Hey'` 문자열 인스턴스를 불러와요. 해당 method는 괄호 사이의 입력, 즉 인수로 `'H'`를 받아들입니다. 그리고 앞의 문자열 `'Hey'`의 첫 문자가 `'H'`가 맞다고 판단되면, `true` 값을 반환합니다.

<br>

[Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)에서 내장된 `string method`를 찾을 수 있어요.

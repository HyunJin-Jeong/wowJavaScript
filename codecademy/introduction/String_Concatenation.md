## String Concatenation
---
연산자는 결코 숫자만을 위하지 않아요! 두 개의 문자열에 `+` 연산자를 사용할 수 있답니다. 일반적으로 왼쪽에 위치한 문자열에 오른쪽에 위치한 문자열이 추가된 값이 나와요.
```Javascript
console.log('hi, ' + 'hyunjin'); // Prints 'hi, hyunjin'
console.log('I love ' + 'code') // Prints 'I love code'
```
<br>

한 문자열을 다른 문자열에 추가하는 이 과정을 `연결(Concatenation)`이라고 합니다. 그리고, 우리는 문자열 사이에 공백이 필요하면, 수동으로 넣어줘야합니다. 컴퓨터는 공백을 스스로 넣지 않으니까요!
<br>
<br>

두 개의 문자열이 아닌, 더욱 많은 문자열을 서로 연결 시킬 수도 있답니다.
```javascript
console.log('One' + ', ' + 'Two' + ', ' + 'Three'); // Prints 'One, Two, Three'
```
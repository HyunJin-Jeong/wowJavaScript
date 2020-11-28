## typeof operator
---
우리가 코드를 작성하는 동안, 우리의 프로그램에서 변수의 데이터 타입이 무엇인지 확인할 필요가 있어요. 만약 변수의 값을 확인하고 싶다면, `typeof` 연산자를 사용하면 된답니다!
<br>
<br>

`typeof` 연산자는 값을 체크하고, 데이터 타입의 문자열을 반환하거나, 다시 전달해요.
```javascript
const unknown1 = 'test';
console.log(typeof unknown1); // Prints 'string'

const unknown2 = 100;
console.log(typeof unknown2); //Prints 'number'

const unknown3 = true;
console.log(typeof unknown3); //Prints 'boolean'
```
예시에서, `unknown1` 변수는 `'test'`라는 문자열을 할당했으니 `string` 타입이고, `typeof unknown1`을 실행했을 때, 우리는 `'string'` 문자열 값을 반환받게 돼요!
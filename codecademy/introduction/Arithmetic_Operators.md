## Arithmetic Operators
---
프로그래밍을 하면서, 연산을 하는 것은 흔한 일입니다. 연산자는 우리 코드에서 작업을 수행하는 문자예요. Javascript는 산술 연산자가 몇 개 내장되어 있어 숫자에 대한 수학적 계산을 할 수 있어요.

1. Add: `+`
2. Subtract: `-`
3. Multiply: `*`
4. Divide: `/`
5. Remainder: `%`

첫 번째로, 기본적인 네 가지 연산을 수행해봅시다.
```Javascript
console.log(3 + 4) // Prints 7
console.log(4 - 1) // Prints 3
console.log(4 * 2) // Prints 8
console.log(6 / 3) // Prints 2
```
`console.log()`를 사용하면, 컴퓨터가 괄호 안의 식을 계산하고 결과를 콘솔에 출력한다는 점을 유의하세요. 만약 우리가 `3 + 4`라는 글자를 출력하고 싶다면, `console.log("3 + 4")`로 입력해줘야 합니다.
<br>
<br>

두 번째로, 나머지 연산입니다.
```Javascript
console.log(10 % 3) // Prints 1
console.log(9 % 3) // Prints 0
```
remainder 연산자는 modulo라고 부르기도 하는데, 값을 나누고 나눈 값에 대한 나머지를 반환합니다. 
<br>
<br>

```Javascript
console.log(21 + 3.5);
console.log(2020 - 1969);
console.log(240 / 65);
console.log(0.2708 * 100)
```
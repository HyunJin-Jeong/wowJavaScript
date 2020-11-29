## String Concatenation with Variables
---
이전 학습을 통해 우리는 문자열들을 변수에 할당하는 방법을 배웠어요. 이젠, 어떻게 문자열이 담긴 변수로 문자열들을 연결할 수 있을지 고민하는 시간이에요.
<br>
<br>

`+` 연산자를 이용해 문자열 값이 변수에 저장되는 경우에도 문자열들을 서로 연결할 수 있어요.
```javascript
let myName = 'Hyunjin';
console.log('My name is ' + myName + '!'); // Prints 'My name is Hyunjin!'
```
<br>

위 예시에서, 우리는 `myName`변수에 `Hyunjin`이라는 값을 할당했어요. 그 다음 줄에는 `+` 연산자를 이용해 `My name is`, 값이 저장된 `myName` 변수, 그리고 `!`을 서로 연결했죠. 그리고 결과는 아래와 같이 출력됩니다.
```
My name is Hyunjin!
```

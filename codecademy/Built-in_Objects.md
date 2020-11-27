## Built-in Objects
---
`console` 외에도 Javascript에 내장된 객체는 많습니다. 결론적으로 우린 우리만의 무언가를 만들 것이지만, 현재 `Built-in Objects`는 유용한 기능들로 똘똘 뭉쳐있죠.
<br>
<br>

예를들어, 만약 당신이 산술보다 복잡한 연산들을 하고 싶다면, Javascript에는 내장된 `Math`라는 객체가 있습니다.
<br>
<br>

Object의 좋은 점은 그것들이 각자의 Method를 갖고 있다는 점이에요! 내장된 `Math` object에서 `.random()` method를 호출해 볼까요?
```javascript
console.log(Math.random()); // Prints a random number between 0 and 1
```
<br>

위 예시에서, `dot operator`와 객체 이름을 붙여 `.random()` method의 이름, 그리고 괄호를 열고 닫아 호출했어요. 해당 method는 0과 1 사이의 값을 랜덤하게 반환해요.
<br>
<br>

위 method는 0과 50 사이의 수를 랜덤하게 반환할 수도 있어요!
```javascript
Math.random() * 50;
```
<br>

위 예시에서 `Math.floor()`라는 Math method를 응용하는 방법이 있어요. `math.floor()`는 소수점을 받아, 가장 가까운 정수로 반올림을 하죠.
```javascript
Math.floor(Math.random() * 50);
```
- `math.random`은 0과 1사이의 난수를 생성 후 반환
- 해당 숫자에 50을 곱해서 0과 50 사이의 수를 반환
- `Math.flore()`는 숫자를 가장 가까운 정수로 반올림해 반환

<br>

`Math Object`의 모든 properties 또는 method를 보고싶다면, [이 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)를 확인하세요.
## Create a Variable: var
---
2015년 Javascript의 ES6 버전에는 많은 변화가 있었어요. 제일 큰 변화 중 하나는 변수를 만들거나 선언하는 두 개의 새로운 키워드인 `let`과 `const`입니다. 이전 개발자들은 변수를 만들 때 `var`만 사용할 수밖에 없었어요.
```javascript
var myName = 'Hyunjin';
console.log(myName); // Prints 'Hyunjin'
```
<br>

위 예시에서, <br>
1. `var`, 변수의 줄임말로, 새 변수를 만들거나 선언하는 Javscript의 키워드입니다.
2. `myName`은 변수의 이름이에요. 이런 식으로 대문자로 표기하는 것은 `camel casing`이라고 불리는 자바스크립트의 표준 규악입니다. `camel casing`은 모든 단어를 묶어, 첫번째 단어는 소문자로 되어있어요. 그 뒤에 모든 단어들은 첫 단어를 대문자로 작성합니다. (ex: camelCaseEveryrthing) 이 외에도 `Pothole`, `Pascal` 표기법들이 있어요.
3. `=`, 할당하는 연산자예요. 변수(`myName`)에 값(`'Hyunjin'`)을 할당하죠.
4. `'Hyunjin`, 변수(`myName`)에 할당하는(`=`) 값이에요. 우리는 `myName` 변수가 `'Hyunjin'` 값으로 초기화되었다고 말할 수 있어요.
5. 변수가 선언되면, 변수 이름은 `'Hyunjin'` 문자열이 `console.log(myName)`을 통해 콘솔에 출력됩니다.

<br>

변수 이름 지정에는 몇 가지 규칙이 있어요.
- 변수 이름은 숫자로 시작할 수 없습니다.
- 변수 이름은 대소문자를 구분하므로 `myName`과 `myname`은 서로 다른 변수일 수 있어요. 하지만 서로 다른 사례를 이용해 이름이 같은 두 변수를 만드는 것은 좋지 않은 방법입니다.
- 변수 이름은 `keywords`와 같을 수 없어요. 키워드의 목록은 [MDN's keyword documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)을 참고하세요!

<br>

### hoisting
변수 선언은 어느 코드가 실행되기 전에 처리하기 때문에, 코드 안에서 어디서든 변수 선언은 최상위에 선언한 것과 동등해요. 이것은 변수가 선언되지 전에 사용될 수 있다는 것을 의미하죠. 변수 선언이 함수 또는 전역 코드의 상단에 이동하는 것과 같은 행동을 `hoisting`이라고 합니다.
```javascript
test = 2;
var test;

// 위 선언을 아래와 같이 이해하시면 됩니다.
var test;
test = 2;
```

<br>

만약 `var`에 대한 자세한 내용을 알아보려면 [MDN var documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)을 확인하세요.
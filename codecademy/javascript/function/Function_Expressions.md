## Function Expressions
---
함수를 정의하는 또 다른 방법은 `function expression`을 사용하는 것이에요. 표현식 내부에 함수를 정의하기 위해서는 `function`이라는 키워드를 사용하면 돼요. `function expression` 내부에서, 함수 이름은 대부분 생략됩니다. 이름이 없는 함수는 `anonymous function`이라고 합니다. `function expression`은 종종 변수에 저장되어 그것을 참조하죠.
```javascript
const calculateArea = function(width, height) {
    const area = width * height;
    return area;
};
```
1. 변수 이름을 함수의 이름 또는 식별자로 지정하려면 변수를 선언해요.

2. 매개 변수가 있는 괄호를 사용하여 만든 `anonymous function`을 변수의 값으로 할당해요.

<br>

함수 식을 호출하려면 함수가 저장된 변수의 이름과 함수에 전달되는 인수를 둘러싸는 괄호를 입력하면 됩니다!

```javascript
calculateArea(5, 10);
```
함수 선언과 달리 `function expressions`는 `hoisted`되지 않기 때문에 정의 전에 호출할 수 없어요.

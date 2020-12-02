## Arrays with let and const
---
우리는 `let`과 `const` 키워드를 사용해 변수를 선언할 수 있다는 것을 알아요. 그리고 `let`으로 선언된 변수는 값을 재할당 할 수도 있죠.
<br>
<br>

`const`로 선언한 변수는 값을 재할당 할 수 없어요. 하지만, `const`로 선언한 `array`는 값의 변형이 가능해요. 즉, `const` 배열의 내용을 변경할 수 있지만, 새 배열이나 다른 값을 재할당할 수는 없다는 의미예요.
<br>
<br>

```javascript
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = "Mayo";
console.log(condiments);
// Prints [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ["Mayo"];
console.log(condiments);
// Prints [ 'Mayo' ]

utensils[3] = "Spoon";
console.log(utensils);
// Prints [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
```
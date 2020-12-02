## More Array Methods
---
`.push()`, `.pop()` 뿐만 아니라 배열에서 사용할 수 있는 다른 메소드도 더 많아요. [이 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)에서 다양한 메소드를 접할 수 있어요.
<br>
<br>

`.pop()`과 `.push()`를 호출하면, 배열을 변경할 수 있었죠. 하지만, 원래 배열을 손상시키기 않고, `non-mutating` 방식을 사용할 수 있죠. 마찬가지로, 위 문서에 해당 메소드를 찾을 수 있습니다.
<br>
<br>

`Javascript` 개발자들이 주로 사용하는 배열 메소드는 `.join()`, `slice()`, `splice()`, `split()`, `unshift()` 또는 `concat()` 등이 있어요. 이런 내장 메소드를 사용하면, 배열로 작업할 때 몇 가지 일반적인 작업을 더 쉽게 수행할 수 있죠.
<br>
<br>

```javascript
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

console.log(groceryList);
groceryList.shift();
console.log(groceryList);

groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");
console.log(groceryList);
console.log(pastaIndex);
```
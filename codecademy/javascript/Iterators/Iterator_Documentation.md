## Iterator Documentation
---
Javascript에는 내장된 또 다른 배열 메소드들이 많이 있답니다. 궁금하다면, [이 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)를 확인하세요.
<br>
<br>

각 메소드들에 대한 문서에는 다음과 같은 포인트가 있어요.

1. A short definition.

2. A block with the correct syntax of using the method.

3. A list of parameters the method accepts or requires.

4. The return value of the function.

5. An extended description.

6. Examples of the method's use.

7. Other additional information.

<br>

### Example
---
1. In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

<br>

```javascript
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => word.length < 6));
// Prints true
```
<br>

2. The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

<br>

```javascript
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

const interestingWords = words.filter(word => word.length > 5);

console.log(interestingWords);
// Prints [ 'unique', 'uncanny', 'oxymoron' ]
```

3. Complete the code between the parentheses to check if every element has more than 5 characters.

<br>

```javascript
console.log(interestingWords.every(word => word.length > 5));
// Prints true
```
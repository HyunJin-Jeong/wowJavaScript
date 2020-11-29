## Magic Eight Ball
---
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

---
1. In the first line of the program, define a variable called `userName` that is set to an empty string.
<br>
<br>
If the user wants, he or she can enter his or her name in between the quotation marks.

2. Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like `'Hyunjin'` — use string interpolation to log `Hello, Hyunjin!` to the console. Otherwise, simply log `Hello!`.

3. Create a variable named `userQuestion`. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.

4. Write a `console.log()` for the userQuestion, stating what was asked. You can include the user’s name in the `console.log()` statement, if you wish!

5. We need to generate a random number between 0 and 7.
<br>
<br>
Create another variable, and name it `randomNumber`. Set it equal to this expression, which uses two methods from the Math library.
<br>
`Math.floor(Math.random() * 8);`

6. 
Create one more variable named `eightBall`, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of `randomNumber`.

7. We need to create a control flow that takes in the randomNumber we made in step 4, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:
<br>
<br>
`'It is certain'`<br>
`'It is decidedly so'`<br>
`'Reply hazy try again'`<br>
`'Cannot predict now'`<br>
`'Do not count on it'`<br>
`'My sources say no'`<br>
`'Outlook not so good'`<br>
`'Signs point to yes'`<br>
<br>
If the `randomNumber` is `0`, then save an answer to the `eightBall` variable; if `randomNumber` is `1`, then save the next answer, and so on. If you’re feeling creative, make your own responses!

8. Write a `console.log()` to print the Magic Eight Ball’s answer, the value of the `eightBall` variable.

9. Run your program a few times to see random results appear in the console!
<br>
<br>
If you want extra practice:
<br>
<br>
If you started with a `switch` statement, convert it to `if/else if/else` statements.
If you started with `if/else if/else` statements, convert them to a `switch` statement.

---
### Result code
```javascript
let userName = "";
let eightBall = "";
const userQuestion = "Will I become a werewolf tonight?";
const randomNumber = Math.floor(Math.random() * 8);

userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

console.log(`The user asked: ${userQuestion}`);

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall);
```
## Kelvin Weather
---
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in [Kelvin](https://en.wikipedia.org/wiki/Kelvin).

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers

For example, 283 K converts to 10 °C which converts to 50 °F.

---
1. The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
<br>
The value saved to kelvin will stay constant. Choose the variable type with this in mind.

2. Write a comment above that explains this line of code.

3. Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
<br>
<br>
Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

4. Write a comment above that explains this line of code.

5. Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
<br>
<br>
Fahrenheit = Celsius * (9/5) + 32
<br>
<br>
In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.

6. Write a comment above that explains this line of code.

7. When you convert from Celsius to Fahrenheit, you often get a decimal number.
<br>
<br>
Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

8. Write a comment above that explains this line of code.

9. Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
<br>
<br>
`The temperature is TEMPERATURE degrees Fahrenheit.`
<br>
<br>
Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.

10. Run your program to see your results!

11. By using variables, your program should work for any Kelvin temperature — just change the value of `kelvin` and run the program again.
<br>
<br>
What’s `0` Kelvin in Fahrenheit?

12. Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.
<br>
<br>
If you’d like extra practice, try this:
<br>
<br>
Convert `celsius` to the [Newton](https://en.wikipedia.org/wiki/Newton_scale) scale using the equation below
<br>
`Newton = Celsius * (33/100)`
<br>
<br>
Round down the Newton temperature using the `.floor()` method
Use `console.log` and string interpolation to log the temperature in `newton` to the console

<br>

### Result Code
```javascript
// Kelvin
const kelvin = 0;

// Celsius is kelvin - 273
const celsius = kelvin - 273;

// Fahrenheit is Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

// When convert from Celsius to Fahrenheit, often get a decimal number.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
```
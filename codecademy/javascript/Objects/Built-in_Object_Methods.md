## Built-in Object Methods
---
In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: `.hasOwnProperty()`, .`valueOf()`, and many more! Practice your documentation reading skills and check out: [MDN’s object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods).

There are also useful Object class methods such as `Object.assign()`, `Object.entries()`, and `Object.keys()` just to name a few. For a comprehensive list, browse: [MDN’s object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor).

Let’s get acquainted with some of these methods and their documentation.

Note: You will see errors as you work through this exercise, but by the end the errors will be fixed!
<br>
<br>


### Example
---

1. robot. We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call.

<br>

```javascript
const robotKeys = Object.keys(robot);

console.log(robotKeys);
// Prints [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
```
<br>

2. Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
<br>
<br>
Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().

<br>

```javascript
const robotEntries = Object.entries(robot);

console.log(robotEntries);
// Prints [ [ 'model', 'SAL-1000' ], [ 'mobile', true ], [ 'sentient', false ], [ 'armor', 'Steel-plated' ], [ 'energyLevel', 75 ] ]
```
<br>

3. Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: `{laserBlaster: true, voiceRecognition: true}`. Make sure that you are not changing the robot object!

<br>

```javascript
const source = {
  laserBlaster: true,
  voiceRecognition: true,
};

const newRobot = Object.assign({}, robot, source);

console.log(newRobot);
// Prints { model: 'SAL-1000', mobile: true, sentient: false, armor: 'Steel-plated', energyLevel: 75, laserBlaster: true, voiceRecognition: true }
```
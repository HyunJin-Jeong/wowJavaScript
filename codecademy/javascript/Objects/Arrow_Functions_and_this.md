## Arrow Functions and this
---
이전에 어떤 메소드의 경우 `calling object`가 그 메소드가 속한 대상이라는 것을 보았어요. 만약 `this`라는 키워드로 메소드를 사용한다면, 해당 값은 `calling object`입니다. 하지만, `arrow function`을 메소드로 사용하기 시작하면 더 복잡해져요.

```javascript
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet();
// Prints undefined
```

`goat.diet()`가 `undefined` 값을 출력해요. 왜 이렇게 될까요?
<br>
<br>

`Arrow function`은 호출하는 객체가 아닌 함수 자체에 이미 정의된 `this` 값을 본질적으로 결합하죠. 위 코드에서 `this`의 값은 글로벌 객체 또는 글로벌 스코프에 존재하는 객체로서 `dietType` 속성이 없기 때문에 `undefined`를 반환하죠.
<br>
<br>

[Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 또는 [Global scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)에 대한 자세한 내용은 각각의 문서를 참조하세요!
<br>
<br>

위 예에서 메소드를 사용할 때 `arrow function`을 사용하지 않는 것도 방법이에요.
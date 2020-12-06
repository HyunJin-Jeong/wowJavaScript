## Destructured Assignment
---
우리는 종종 객체에서 `key-value` 쌍을 추출하여 변수로 저장하기를 원해요.
<br>
<br>

```javascript
const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite",
  },
};
```

위 코드에서 만약, `residence` 속성을 변수로 저장하고 싶다면 아래와 같이 해왔죠.

```javascript
const residence = vampire.residence;
console.log(residence);
// Prints "Transylvania"
```
<br>
<br>

하지만, 이젠 `destructuring`이라는 기술을 이용해 `keystrokes`를 절약할 수 있어요. `destructuring` 할당 시, 객체 키의 이름을 중괄호로 감싸고, 객체에 할당하는 변수를 생성해요.

```javascript
const { residence } = vampire;
console.log(residence);
// Prints "Transylvania"
```

보시면, `vampire` 오브젝트의 `residence` 속성의 값을 새로운 변수인 `residence`에 할당했어요. 그리고 `residence` 변수를 출력하니 `"Transylvania"`라는 값이 나왔죠.
<br>
<br>

추가로, `destructuring assignment`를 이용하여 객체의 중첩 속성을 가져올 수도 있답니다.

```javascript
const { day } = vampire.preferences;
console.log(day); // Prints "stay inside"
```
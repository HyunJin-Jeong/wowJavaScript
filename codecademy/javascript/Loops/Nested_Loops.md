## Nested Loops
---
다른 루프 안에서 작동하는 루프를 `nested loop`라고 불러요. `Nested for loop`에 대한 한 가지 용도는 두 배열의 항목을 비교하는 것이죠.
<br>
<br>

```javascript
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
```
<br>

위 예시에서 어떤 일이 일어날 지에 대해 생각해봐요. 외부 `loop`의 배열인 `myArray`의 각 항목에 대해 내부 `loop`는 외부 배열인 `myArray[i]`의 값과 내부 배열의 각 요소인 `yourArray[j]`를 비교하여 전체적으로 실행해요.
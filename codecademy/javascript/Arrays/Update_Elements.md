## Update Elements
---
이전에, `array` 안 요소에 대한 접근법과 `string`에 대해 인덱스로 접근하는 법을 배웠어요. 이제 우리는 `array` 안 요소에 접근해서 값을 `update`하는 법을 알아볼 거예요.
<br>
<br>

```javascript
let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons);
// Prints ["Winter", "Spring", "Summer", "Autumn"]
```
위 예시는 사계절 이름을 포함한 `seasons` 배열이에요.
<br>
<br>

하지만, `Fall` 대신 `Autumn`이라고 부르고 싶은 우리들의 마음이 어쩔 수 없나봐요. 그래서, `season[3] = "Autumn";` 코드로 `seasons` 배열의 네 번째 값을 `Autumn`으로 바꿨습니다!

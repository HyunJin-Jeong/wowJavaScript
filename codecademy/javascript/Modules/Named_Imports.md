## Named Imports
---
변수에 저장된 객체를 가져오려면 `import` 키워드를 사용하여 `{}` 집합에 변수를 포함하세요.
<br>
<br>

```javascript
// order.js
import { specialty, isVegetarian } from './menu';

console.log(specialty);
```

1. 이곳에 `specialty`와 `isVegetarian`을 가져왔어요.

2. 만약, 두 변수 중 어느 것도 가져오지 않으려면 `import` 문에서 생략할 수도 있답니다.

3. 예시처럼, `specialty` 변수에 `Menu.specialty`를 저장한 것처럼, 변수에 포함된 객체는 바로 사용할 수 있어요.
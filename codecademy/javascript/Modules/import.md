## import
---
ES6 모듈의 구문에서 `import` 키워드는 오브젝트를 가져오는 구문이에요. 

```javascript
// order.js
import Menu from './menu';
```

1. `import` 키워드로 해당 구문을 시작해요.

2. 여기서 키워드 `Menu`는 `export default`된 모듈을 저장할 변수명이에요.

3. `from`은 모듈이 어디에 있는지 알기 위한 키워드예요.

4. `'./menu'`는 가져오는 모듈 파일의 이름이에요. 로컬 파일을 다룰 때는 파일의 확장자를 제외한 파일명을 가리키면 됩니다!

<br>

이제 `order.js` 파일에서 `Menu` 모듈을 사용할 수 있게 되었어요!
<br>
<br>

또 다른 예시

```javascript
import Airplane from "./airplane";

const displayFuelCapacity = () => {
  Airplane.availableAirplanes.forEach((element) => {
    console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
  })
};

displayFuelCapacity();
```
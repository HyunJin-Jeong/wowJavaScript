## Nested Objects
---
어플리케이션 코드에서 객체가 중첩되는 경우가 많으며, 객체는 속성으로 다른 오브젝트를 가질 수 있어요. 그 속성은 훨씬 더 많은 오브젝트의 배열인 속성을 가질 수도 있고요!
<br>
<br>

`spaceship` 객체에서, `crew` 오브젝트를 원합니다. 여기에는 우주선에서 중요한 일을 하는 모든 승무원들이 포함될 것이에요. 승무원들 각각은 `object`입니다. 그들은 `name`, `degree`와 같은 속성을 갖고 각자 역할에 따라 독특한 메소드를 가집니다. 또한, `telescope`와 같은 다른 객체나 `nanoelectronics` 객체 안에 있는 우주선의 컴퓨터에 관한 세부사항을 갖고 있죠.
<br>
<br>

```javascript
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: "Sandra", 
            degree: "Computer Engineering", 
            encourageTeam() { console.log("We got this!") } 
         }
    },
    engine: {
        model: "Nimbus2000"
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: "HD"
         },
        "back-up": {
           battery: "Lithium",
           terabytes: 50
         }
    },
}; 
```
<br>

중첩된 속성에 접근하기 위해 연산자를 이어서 사용할 수 있어요. 각 계층에 어떤 운영자가 사용하는 것이 이치에 맞는지를 볼 수도 있어요. 컴퓨터처럼, 각각의 표현을 왼쪽에서 오른쪽으로 판단하여 조작이 이루어지도록 하는 것이 도움될 수도 있죠.

```javascript
spaceship.nanoelectronics["back-up"].battery;
//Returns "Lithium"
```

코드의 순서는 아래와 같아요.

- 컴퓨터는 처음에 `spaceshiup.nanoelectronics`를 판단하는데, 이것은 `computer` 객체와 `back-up` 객체를 포함한 객체입니다.

- `["back-up"]`을 추가하며, `back-up` 객체에 접근했어요.

- `back-up` 객체에 `battery` 속성이 있어, `.battery`를 통해 저장된 값인 `Lithium`을 반환해요.
## Looping Through Objects
---
루프는 조건이 충족될 때까지 코드 블록을 반복하는 프로그래밍 도구예요. 이전에 숫자 인덱싱을 사용하여 배열을 반복하는 법을 배웠죠. 하지만, 객체의 `key-value` 쌍은 순서가 맞지 않아요! `Javascript`는 `for...in` 구문으로 객체를 반복할 수 있는 방법을 제공해 왔어요.
<br>
<br>

`for...in` 구문은 객체의 각 속성에 대해서 코드 블록을 실행해요.

```javascript
let spaceship = {
  crew: {
    captain: { 
      name: "Lily", 
      degree: "Computer Engineering", 
      cheerTeam() { console.log("You got this!") } 
    },
    "chief officer": { 
      name: "Dan", 
      degree: "Aerospace Engineering", 
      agree() { console.log("I agree, captain!") } 
    },
    medic: { 
      name: "Clementine", 
      degree: "Physics", 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: "Shauna", 
      degree: "Conservation Science", 
      powerFuel() { console.log("The tank is full!") } 
    },
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
```
<br>

`for...in`은 `spaceship.crew` 객체의 각 요소가 반복될 것이에요. 각 반복에서 `crewMember` 변수는 `spaceship.crew`의 `key` 중 하나로 설정되어 승무원의 역할과 이름을 기록할 수 있죠.

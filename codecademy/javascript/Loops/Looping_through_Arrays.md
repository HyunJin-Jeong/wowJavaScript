## Looping through Arrays
---
데이터 구조의 반복을 위해서 `for loops`를 사용할 수 있어요! 예를 들어, 우리는 배열의 요소에 같은 연산을 실행한다면, `for loop`를 사용할 수 있어요. `Arrays`는 제품의 정보나 고객과 같은 데이터의 리스트예요. 우리가 스토어를 소유하고 있고, 모든 제품 가격이 인상했다고 생각해보세요. 반복 코드가 많을 수 있지만, `for loop`를 사용하여 배열을 반복함으로써 이 작업을 쉽게 수행할 수 있어요.
<br>
<br>

배열의 각 요소를 순환하려면, `for loop`가 그 조건에서 배열의 `.length` 속성을 사용해야 해요.
<br>
<br>

```javascript
const animals = ["Lion", "Monkey", "Whale"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
```

위 예시의 결과는 아래와 같아요.

```
Lion
Monkey
Whale
```
<br>

해당 루프에서는 우리가 `i`라는 `iterator variable`을 설정했어요. 많은 루프에서 볼 수 있는 변수 명명 규칙이에요. 우리가 배열을 반복하기 위해 `i`를 사용할 때, 우리는 그것을 `index`의 줄임말로 생각할 수 있어요. 우리의 `stopping condition`이 `i`가 `animals.length`보다 작다는 것을 어떻게 체크하는지 주목하세요. 배열은 `0`으로 인덱싱되며, 배열의 마지막 요소의 인덱스는 해당 배열의 길이에서 1을 뺀 값과 동일합니다. 만약, 우리가 `animals.length`의 요소에 접근하려고 노력했다면, 시간낭비일 수도 있었어요.
<br>
<br>

하여튼 `loops`를 사용하면, 배열의 요소를 이용하는 작업이 더 쉬워집니다.

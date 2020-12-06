## Named Exports
---
ES6는 `export module`에 두 번째 접근법을 도입했어요. `export default` 외에도 `named exports`는 변수를 이용해 데이터를 내보낼 수 있어요.
<br>
<br>

```javascript
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
 
export { specialty, isVegetarian };
```

1. 여기서 `named exports`를 사용할 때, 물체에 속성을 설정하지 않아요. 각 `export`는 자체 변수에 저장돼요.

2. `specialty`는 문자열 형태의 객체이고, `string object`는 함수 형태의 객체예요. 자바스크립트에서 모든 함수는 사실 객체라는 것을 의식하세요.

3. `export { specialty, isVegetarian };`은 객체를 변수 이름으로 내보내요. `export` 키;워드가 접두사인 것을 주목하세요.

4. `specialty`와 `isVegetarian`은 내보내는 반면, `isLowSodium`은 `export` 구문에 명시되지 않아 내보내지 않아요.
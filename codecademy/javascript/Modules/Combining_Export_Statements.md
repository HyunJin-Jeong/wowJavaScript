## Combining Export Statements
---
`named export`와 `default exports`를 함께 사용할 수 있어요!

```javascript
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};
 
export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;
```

모듈을 내보내기 위해 파일 하단에 `named export`를 사용해요. 그리고, `default export`를 사용해서 `isGlutenFree` 변수도 내보내죠.
<br>
<br>

위 방법 보다는 아래 코드처럼, 변수를 선언되는 대로 내보내고, 다른 변수를 `export default` 구문으로 내보내는 경우에는 효과가 있을 거예요.

```javascript
export let Menu = {};
 
export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};
 
export default isGlutenFree;
```
<br>

사실, 이러한 두 가지 방법을 같이 사용하는 것은 피하는게 좋지만, 경우에 따라서는 유용해요. 예를 들어, 개발자가 특정 함수만 가져오려고 할 수 있으며 전체 `export default`를 할 필요가 없다고 생각될 때 말이죠.
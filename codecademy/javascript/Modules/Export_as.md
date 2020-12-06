## Exports as
---
`Named exports`도 내보내거나 가져올 때, 변수의 이름을 바꿀 수 있는 편한 방법을 제공해요. `as` 키워드로 할 수 있답니다.
<br>
<br>

```javascript
let specialty = '';

export { specialty as test };
```

위 예시 코드 아래에 `export` 구문에 변화가 있어요. `as` 키워드는 `specialty`의 변수 이름을 변화시켰다는 점이 주목 포인트랍니다!
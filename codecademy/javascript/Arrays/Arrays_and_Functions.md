## Arrays and Functions
---
우린, 배열을 변경하는 방법에 대해 알아보았어요. 함수에서 배열을 변경하려고 하면 어떻게 될까요? 배열이 함수를 호출 후 변경 사항을 유지하는지, 함수 내부에서 범위를 지정할까요?
<br>
<br>

함수 내의 배열에서 `.push()`를 호출한 다음을 살펴보세요.
```javascript
const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}

addFlower(flowers);
console.log(flowers);
// Prints ["peony", "daffodil", "marigold", "lily"]
```
예시에서 있던 일을 봅시다!

- `flowers`는 3가지 항목을 가진 배열이에요.

- `addFlower()` 함수는 `arr`에 `lily` 요소를 추가하기 위해 `.push()`를 사용해요.

- `addFlower()` 안에 코드를 실행할 `flowers` 인수를 이용하여 `addFlower()`를 호출했어요.

- `flowers`의 값을 확인하면, 이제 `lily` 요소를 갖고 있답니다. 원래의 배열이 바뀌었어요!

<br>

따라서, 배열을 함수로 전달할 때, 배열이 함수 내부에서 변경되면, 그 변화는 함수 외부에서도 유지되어요. 이 개념은 우리가 실제로 이 기능을 전달하고 있는 것이 가변 메모리에 저장되어 있고, 메모리가 변경되는 위치를 참조하기 때문이에요.

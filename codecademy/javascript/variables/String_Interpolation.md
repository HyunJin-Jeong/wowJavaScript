## String Interpolation
---
Javascript의 ES6 버전에서 우리는 `Template literals`를 이용해 문자열에 변수를 삽입하거나 보간할 수 있어요. 예시를 통해 확인해보아요!
```javascript
const favoriteAnimal = 'dog';
console.log(`I wanna ${favoriteAnimal}.`); // Prints 'I wanna dog.'
```
<br>

설명을 해보자면,
- `template literal`은 백틱으로 감싸요.(백틱은 보통 키보드 위 쪽 `1`의 왼쪽에 있답니다.)
- `template literal` 안에서, `${favoriteAnimal}`을 볼 수 있어요. `favoriteAnimal` 변수에 담긴 값을 `template literal`에 추가하는 방법을 뜻합니다.
- 우리는 이 보간법을 통해서 `I wanna dog`라는 문자열을 출력할 수 있었습니다.

<br>

`template literals`를 이용할 때 가장 큰 이점 중 하나는 코드의 가독성이에요. 이 방법을 이용하면, 우리는 어느 부분이 추가된 문자열인지 더 쉽게 알 수 있죠. 또, 큰 따옴표 또는 작은 따옴표를 벗어날 염려도 없죠.
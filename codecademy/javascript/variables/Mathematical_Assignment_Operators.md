## Mathematical Assignment Operator
---
변수와 산술 연산자를 이용해 새로운 값을 계산하고 변수에 할당하는 방법을 생각해 봅시다!
```javascript
let num = 4;
num = num + 1;

console.log(num); // Prints 5
```
위 예시에서, 4라는 값을 할당한 `num`이라는 변수를 선언했어요. 바로 다음 줄에 `num = num + 1`이라고 작성하며 `num`에 저장된 4라는 값은 5로 증가했죠.
<br>
<br>

두 번째 예시로 넘어갈게요. 우리는 `+=`라는 할당 연산자로 `num`에 값을 재할당 할 거예요. 처음 `+` 연산자는 오른쪽 숫자를 사용하여 `+` 연산을 수행한 뒤 값을 `num`에 재할당해요.
<br>
이 외에도 `-=`, `*=`, `/=`와 같은 연산자를 사용할 수 있답니다.
```javascript
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Prints 15

let y = 50;
y *= 2; // Can be written as y = y * 5
console.log(y); // Prints 100

let z = 8;
z = 2; // Can be written as z = z / 2
console.log(z); // Prints 4
```
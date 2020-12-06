## Consuming Promises
---
The initial state of an asynchronous promise is pending, but we have a guarantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly named .then() method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”

비동기 `Promise`의 초기 상태는 `pending`이지만, 그것이 해결될 것이라는 보장이 있어요. 그때, 무슨 일이 일어나야 하는지 컴퓨터에게 말하려면 어떻게 할까요? `Promise` 객체에 적절한 `.then()`이라는 메소드가 있어요. 이것은 컴퓨터에게 `"나는 약속이 있는데, 그것이 해결되고 나면, 내가 어떤 일을 하고 싶어"`라고 말하는 것과 같아요.
<br>
<br>

In the case of our dishwasher promise, the dishwasher will run then:

- If our promise rejects, this means we have dirty dishes, and we’ll add soap and run the dishwasher again.

- If our promise fulfills, this means we have clean dishes, and we’ll put the dishes away.

식기 세척기 `Promise`의 경우, 다음과 같이 진행될 거예요.

- 만약, `promise`가 `rejects`로 된다면, 더러운 접시를 갖고 있다는 것을 의미하며, 비누를 넣고 식기 세척기를 다시 가동할 거예요.

- 만약, `promise`가 `fulfills`로 된다면, 깨끗한 접시를 갖고 있다는 것을 의미하며, 접시를 치워버릴 거예요.

<br>

.then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

- The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.

- The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

`.then()`은 `higher-order function`으로, 콜백 함수를 인자로서 사용해요. 해당 콜백을 핸들러라고 부르죠. `promise`가 완료되면, 설정된 값으로 적절한 취급자가 호출된답니다.

- 첫 번째 핸들러는 `onFulfilled`라고 불리며, `promise resolving`을 위한 로직을 포함해야 해요.

- 두 번째 핸들러는 `onRejected`라고 불리며, 실패 처리기로서, `promise rejecting`을 위한 로직을 포함해야 해요.

<br>

We can invoke .then() with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an error, .then() will just return a promise with the same settled value as the promise it was called on. One important feature of .then() is that it always returns a promise. We’ll return to this in more detail in a later exercise and explore why it’s so important.

하나, 둘 다, 또는 `neither handler`와 함께`.then()`를 호출할 수 있어요. 그것은 유연하기도 하지만, 까다로운 디버깅도 가능하게 해요. 만약 적절한 취급자가 제공되지 않는다면, `.then()`은 에러를 던지지 않고, 요구되었던 `promise`의 확정된 값을 반환해요.
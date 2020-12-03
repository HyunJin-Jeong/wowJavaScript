## Functions as Data
---
자바스크립트 함수는 언어의 다른 데이터 타입과 같이 동작해요. 우리는 변수에 함수를 할당할 수 있고, 새로운 변수에 함수를 재할당 할 수도 있어요.
<br>
<br>

아래, 그 함수가 사용되지만, 코드의 가독성을 불편하게 만드는 이름을 갖고 있어요. 이 기능이 중요한 일을 하고, 반복적으로 사용할 필요가 있다고 가정해봐요!

```javascript
const announceThatIAmDoingImportantWork = () => {
  console.log("I'm doing very important work!");
};
```

이런 상황에서 코드를 변경하지 않고, 함수의 이름을 바꾸려면 어떻게 하면 좋을까요? 적절한 이름을 가진 변수에 함수를 다시 할당할 수 있답니다!

```javascript
const busy = announceThatIAmDoingImportantWork;

busy();
```
<br>

`busy`는 원본 함수를 참조하는 변수예요. 만약, 우리가 `busy`의 메모리 값과 `announceThatIAmDoingImportantWork`의 메모리 값을 볼 수 있다면, 그것들은 가리키는 위치 값이 같은 거예요. 그래서 `busy()`를 사용해서 원래 함수를 부여한 이름인 것처럼 호출할 수 있어요.
<br>
<br>

괄호 없이 `announceThatIAmDoingImportantWork`를 `busy` 변수에 대한 값으로 할당하는 방법에 주목하세요. 호출될 때 반환되는 값이 아니라, 함수 자체의 값을 할당하려는 경우입니다.
<br>
<br>

Javascript에서, 함수는 `first class objects` 입니다.  이것은 다른 `objects`와 마찬가지로, Javascript 함수도 속성과 메소드를 가질 수 있다는 것을 의미하죠.
<br>
<br>

함수는 객체의 한 유형이기 때문에, `.length`, `.name` 등의 속성과 `.toString()` 등의 메소드를 가지고 있어요. 함수의 메소드와 속성에 대해 자세히 알고 싶다면, [이 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)를 참조하세요.
<br>
<br>

함수는 우리가 그것들을 호출할 수 있기 때문에 특별하지만, 여전히 다른 종류의 데이터처럼 다룰 수 있어요. 연습이 필요하죠!

## How a Form Works
---
우리는 인터넷이 정보를 주고받는 컴퓨터의 네트워크라고 생각할 수 있어요. 컴퓨터는 소통하기 위해 `HTTP Request`이 필요해요. `HTTP Request`는 컴퓨터에 수신 정보 처리 방법을 지시해요. `HTTP Request`에 대한 내용은 [이 문서](https://www.codecademy.com/articles/http-requests)를 보면 감이 훨씬 많이 올 거예요.
<br>
<br>

`<form>` 요소는 정보를 수집하기 좋은 도구예요. 하지만 우리는 그 정보를 다른 곳에 보내서 처리해야 해요. `<form>` 요소에 `<form>`의 정보가 어디로 가는지, 어떤 `HTTP Request`를 할 것인지 둘 다 설정할 필요가 있어요. 아래 샘플을 확인하세요!
```html
<form action="/example.html" method="POST">
</form>
```
위 예시에서, `POST` 요청으로 `example.html` 파일에 정보를 보낼 `<form>`에 대한 뼈대를 만들었어요.

- `action` 속성은 정보를 어디로 보낼 것인지 지정해요.

- `method` 속성은 `HTTP Request`의 요청 메소드를 할당해요.

<br>

`<form>` 요소도 자식 요소를 포함할 수 있어요. 예를 들어, 사용자가 `<form>`에 대해서 알 수 있도록 헤더를 제공하는 것이 도움이 될 거예요. 우리는 더 자세한 내용을 제공하기 위해 `paragraphs`를 추가할 수도 있죠.
```html
<form action="/example.html" method="POST">
  <h1>Creating a form</h1>
  <p>Looks like you want to learn how to create an HTML form. Well, the best way to learn is to play around with it.</p>
</form>
```
위 예시는 사용자 입력을 수집하진 않아요. 다음 강의부터 그렇게 할 것이에요!
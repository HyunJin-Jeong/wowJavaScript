## Linking At Will
---
모든 링크가 텍스트로 구성되지 않은 웹 사이트를 보셨을 겁니다! 아마도 클릭했던 링크는 이미지 또는 다른 형태였겠죠?
<br>
<br>

지금까지, 우린 텍스트만을 이용해서 링크를 추가했어요.
```html
<a href="#">TEST</a>
```
<br>

하지만, 텍스트 전용 링크는 웹 개발자로서의 유연성을 감소시키기만 해요!
<br>
<br>

고맙게도, HTML은 `anchor element`와 함께 어떤 유형의 요소에도 링크를 추가할 수 있게 해줍니다. 이 방법을 이용해서 `<img>` 요소를 `<a>` 요소로 감싸 사용할 수 있죠.
<br>
<br>

```html
<a href="#" target="_blank"><img src="@" alt="Link to image"/></a>
```
위 예시에서, 이미지를 클릭하면 해당 링크에 연결할 수 있어요. 바로, `<img>` 태그와 `<a>` 태그 덕분이죠.
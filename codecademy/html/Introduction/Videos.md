## Videos
---
우리는 HTML에서 videos를 보여줄 수 있도록 하려면 무엇을 해야 할까요? 이미지를 불러올 때 `<img>` 태그를 사용했듯이, `<video>` 태그를 사용하면 됩니다. `<video>` 태그 역시 마찬가지로 비디오의 출처를 가져오는 `src` 속성이 필요해요. 하지만, `<img>` 태그와 달리 `<video>` 태그는 opening tag과 closing tag가 필요합니다!
<br>


```html
<video src="myVideo.mp4" width="320" height="240" controls>
    Video not supported
</video>
```
위 예시에서, 비디오 출처(`src`)는 `myVideo.mp4`입니다. 해당 소스는 웹페이지와 함께 호스팅되는 비디오 파일 또는 다른 웹페이지에서 호스팅되는 비디오 파일을 가리키는 URL일 수 있어요.
<br>
<br>

`src`의 다음에는 `width`와 `height` 속성이 있어요. 이 속성은 화면이 브라우저에 표현되는 면적을 설정하죠. 그리고 `controls` 속성은 브라우저에서 일시 중지, 재생 및 건너뛰기 같은 비디오 조작을 할 수 있도록 해요.
<br>
<br>

마지막으로 opening tag와 closing tag 사이에 텍스트로 `"Video not supported"`라고 적었죠. 만약 예기치 않은 오류로 영상을 불러오지 못 했다면, 해당 텍스트를 출력해요!
## Global Scope
---
`Scope`는 우리 변수가 선언되는 컨텍스트예요. 변수가 `block` 외부 또는 내부에 존재할 수 있기 때문에 `block`과 관련하여 `scope`를 고려해요.
<br>
<br>

`Global scope`는 변수가 블록 외부에 선언됩니다. 그 변수는 `global variables`라고 부르죠. 왜냐하면, `global variables`는 블록 내부에 바인딩되어 있지 않아 블록 내 코드를 포함한 어떤 코드로도 접근할 수 있기 때문이죠.
```javascript
const color = "blue";

const returnSkyColor = () => {
    return color; // blue
};

console.log(returnSkyColor()); // Prints "blue"
```

- `color` 변수가 블록 외부에 정의되어 있어도 함수 블록에서 접근할 수 있어 `global scope`가 제공되어요.

- `returnSkyColor` 함수 블록 내에서 `color`에 접근할 수 있습니다!
## Accessing Properties
---
객체의 속성에 접근하는 방법은 두 가지가 있어요. 첫 번째는 `dot`(`.`)을 사용하는 것.
<br>
<br>

`dot`을 사용하여 내장된 객체 및 데이터 인스턴스의 속성 또는 메소드로 접근한 경우가 있었죠.

```javascript
"hello".length // Returns 5
```
<br>

속성에 접근하기 위해서도 마찬가지로, 객체 이름을 작성하고, `dot` 다음에 속성의 `key`를 입력하세요.

```javascript
const spaceship = {
  homePlanet: "Earth",
  color: "silver",
};

spaceship.homePlanet; // Returns "Earth"
spaceship.color; // Returns "silver"
```
<br>

만약 우리가 오브젝트에 존재하지 않는 속성에 대해 접근하려 한다면, `undefined`를 반환할 거예요.

```javascript
spaceship.test; // Returns undefined
```
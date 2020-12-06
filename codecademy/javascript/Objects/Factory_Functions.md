## Factory Functions
---
지금까지 우리는 개별적으로 객체를 만들어 왔지만, 아주 빠르게 여러 객체 인스턴스를 만들어 내고자 하는 경우가 있을 거예요. 이때는 `factory functions`을 사용할 수 있어요. 실제 공장은 한 제품의 여러 복사본을 빠르고, 많이 만들어내죠. `Factory functions`는 객체를 반환하는 함수로, 여러 객체 인스턴스를 만드는 데 사용할 수 있어요. 또한 `factory functions`에는 반환되는 객체를 사용자가 정의할 수 있는 파라미터가 있을 수도 있죠.
<br>
<br>

우리가 자바스크립트에서 몬스터를 나타내는 객체를 만들고 싶다고 해봐요. 많은 종류의 몬스터가 있고, 우리는 각각의 몬스터들을 개별적으로 만들 수 있지만, 더욱 편하기 위해서는 몬스터 객체를 만드는 `factory function`을 사용할 수 있죠. 다음과 같이 말이죠!

```javascript
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name,
    age,
    energySource,
    scare () {
      console.log(catchPhrase);
    },
  }
};
```

위 `monsterFactory` 함수에서는 4개의 파라미터를 가지며, `name`, `age`, `energySource`, `scare()` 속성을 갖는 객체를 반환해요. `ghost`와 같은 특정 몬스터를 나타내는 객체를 만들려면, `monsterFactory`를 호출하여 필요한 인자를 입력해 전달하세요. 반환 값을 변수에 할당하면 됩니다.

```javascript
const ghost = monsterFactory("Ghouly", 333, "ectoplasm", "BOO!");
ghost.scare(); // Prints "BOO!"
```

이제 `monsterFactory()` 함수로 `ghost`라는 객체를 만들어 갖게 되었어요. `monsterFactory`를 가만히 냅두고, 새로운 몬스터가 필요할 때마다 문자 그대로의 객체를 만들 필요가 없게 됐죠.
<br>
<br>

또 다른 예시

```javascript
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep () {
      console.log("Beep Boop");
    },
  }
};

const tinCan = robotFactory("P-500", true);
tinCan.beep();
```
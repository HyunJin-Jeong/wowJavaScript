## Import as
---
가져올 때에는 `as` 키워드로 내보낸 이름으로 `import`하면 돼요.
<br>
<br>

```javascript
// order.js
import { chefsSpecial, isVeg } from './menu';
```

1. `Menu` 객체에서 `chefsSpecial`과 `isVeg`를 가져왔어요.

2. 여기서, 내보낼 때 별칭이 지정되지 않은 객체의 별칭을 지정할 수 있는 옵션이 있다는 점에 유의하세요! 예를들어, 내보낸 `isLowSodium` 객체는 가져올 때 키워드로 별칭이 붙을 수 있어요.

<br>

```javascript
import {isLowSodium as saltFree} from 'Menu';
```
<br>

별칭을 사용하는 또 다른 방법은 전체 모듈을 별칭으로 가져오는 것이죠.

```javascript
import * as Carte from './menu';
 
Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium(); 
```

1. 이를 통해 `menu.js`에서 전체 모듈을 `Carte`라는 별칭으로 가져올 수 있어요.

2. 해당 예시에서, 내보낸 어떤 이름이라도 해당 모듈의 속성으로 제공될 것이죠.
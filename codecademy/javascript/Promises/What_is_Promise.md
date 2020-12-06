## What is Promise ?
---
`Promises`는 비동기적 작업의 결과를 나타내는 객체예요. `Promise` 객체는 다음 세 가지 형태 중 하나랍니다.

- `Pending`: 초기 상태 - 작업이 완료되지 않음.

- `Fulfilled`: 작업이 성공적으로 완료되었고, `promise`는 리졸브 한 값을 갖고 있음. 예를 들어, `request`의 `promise`는 `JSON` 객체를 값으로 하여 리졸브 된 것입니다.

- `Rejected`: 작업은 실패했고, `promise`는 실패에 대한 이유가 담겨있어요. 이유는 대게 오류의 종류죠.

<br>

`Promise`가 더 이상 `pending`일 경우 끝난 것으로 봐요. `Promise`는 `fulfilled` 또는 `rejected` 됩니다. 식기세척기를 `promise` 형태로 생각해 볼게요.

- `Pending`: 식기 세척기가 작동 중이지만, 세척을 완료하지 못했어요.

- `Fulfilled`: 식기 세척기는 세척을 마치고 꺠끗한 그릇으로 가득찼어요.

- `Rejected`: 식기 세척기에 문제가 발생했고, 깨끗하지 않은 접시를 돌려줘요.

<br>

식기 세척기 `promise`가 `fulfilled` 상태가 되면, 식기 세척기에서 깨끗한 접시를 내리는 등 관련 일을 수행할 수 있을 거예요. `rejected` 상태가 된다면, 비누를 넣고 다시 작동시키거나 설거지를 손으로 하는 등 대체적인 조치를 취할 수도 있답니다.
<br>
<br>

모든 `Promises`는 결국 완료되어 `promise`가 `fulfilled` 또는 `rejected` 시 어떻게 해야하는 지에 대한 로직을 쓸 수 있게 돼요.
import { useState } from "react"; // useState를 import 한다.

function App() {
  // 우리는 create react app에서 작업을 하고 있고, useState를 위에서 이미 import 했기 때문에 React.useState의 형태로 작성하지 않아도 된다.
  const [counter, setValue] = useState(0);
  // 이전 counter 값에 1을 더한 값을 counter 값으로 설정한다.
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

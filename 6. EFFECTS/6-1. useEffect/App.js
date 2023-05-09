import { useState, useEffect } from "react"; // useState와 useEffect를 import 한다.

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all time");
  useEffect(() => {
    console.log("CALL THE API.....");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

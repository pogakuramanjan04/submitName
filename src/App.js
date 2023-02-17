import "./styles.css";
import { useState } from "react";
let iv1, iv2;
export default function App() {
  const [o, uo] = useState(["", ""]);
  function i1() {
    iv1 = event.target.value;
  }
  function i2() {
    iv2 = event.target.value;
  }
  function s() {
    uo([iv1, iv2]);
    console.log(iv1, iv2);
  }

  return (
    <div className="App">
      <input type="text" onChange={i1} />
      <input type="text" onChange={i2} />
      <button onClick={s}>button</button>
      <h1>
        {o[0]} {o[1]}
      </h1>
    </div>
  );
}

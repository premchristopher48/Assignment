import React, { useState, useEffect } from "react";

function App() {
  const [val, setVal] = useState("");
  const [color, setColor] = useState("");
  const click = (color) => {
    setColor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  const clicked = () => {
    alert(val);
  };
  const change = (e) => {
    setVal(e.target.value);
  };
  return (
    <div>
      <input onChange={change} value={val} />
      <button onClick={clicked}>Click Me</button>
      <br />
      <button
        onClick={() => {
          click("yellow");
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;

import React from "react";

function Child1({ changeText }) {
  return (
    <div>
      <button onClick={() => changeText("seeMe")}>changeText</button>
    </div>
  );
}

export default Child1;

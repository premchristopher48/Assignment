import React, { useState } from "react";
import Slots from "../Slots";
import Data from "../Data";
import "./styles.css";

function App() {
  const [active, setActive] = useState("FirstCard");
  return (
    <div className="App">
      <nav>
        <button onClick={() => setActive("FirstCard")}>One</button>
        <button onClick={() => setActive("SecondCard")}>Two</button>
        <button onClick={() => setActive("ThirdCard")}>Three</button>
        <button onClick={() => setActive("FourthCard")}>Four</button>
        <button onClick={() => setActive("FifthCard")}>Five</button>
        <button onClick={() => setActive("SixthCard")}>Six</button>
        <button onClick={() => setActive("SeventhCard")}>Seven</button>
        <button onClick={() => setActive("EighthCard")}>Eight</button>
      </nav>
      <div>
        {active === "FirstCard" && <Slots data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Slots data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Slots data={Data} cardIndex={2} />}
        {active === "FourthCard" && <Slots data={Data} cardIndex={3} />}
        {active === "FifthCard" && <Slots data={Data} cardIndex={4} />}
        {active === "SixthCard" && <Slots data={Data} cardIndex={5} />}
        {active === "SeventhCard" && <Slots data={Data} cardIndex={6} />}
        {active === "EighthCard" && <Slots data={Data} cardIndex={7} />}
      </div>
    </div>
  );
}

export default App;

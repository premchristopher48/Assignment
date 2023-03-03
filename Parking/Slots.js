import React from "react";

const Slots = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <div className="slots">
          <h1>{item.title}</h1>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Slots;

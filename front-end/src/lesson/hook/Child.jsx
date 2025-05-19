import SubChild from "./SubChild";
import React from "react";

const Child = ({ name }) => {
  console.log("Rendered child:", name);
  return (
    <div>
      child {name} <SubChild />
    </div>
  );
};

export default React.memo(Child); // primitive data

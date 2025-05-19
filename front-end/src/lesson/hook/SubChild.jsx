import React from "react";
const SubChild = () => {
  console.log("render sub child");
  return <>Sub child</>;
};

export default React.memo(SubChild);

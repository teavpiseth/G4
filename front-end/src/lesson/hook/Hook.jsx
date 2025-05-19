import React from "react";
import Child from "./Child";
import Students from "./StudnetUseMemo";
import HookUseCallBack from "./HookUseCallBack";

const Parent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <HookUseCallBack />
      {/* <Students /> */}
      {/* <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <Child /> */}
    </>
  );
};

export default Parent;

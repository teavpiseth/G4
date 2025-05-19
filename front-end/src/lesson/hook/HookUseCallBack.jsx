import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick, label }) => {
  console.log("Rendering child (Button):", label);
  return <button onClick={handleClick}>{label}</button>;
});

const HookUseCallBack = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const increment = useCallback(() => {
    // cache function
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} label="Increment Count" />
      <button onClick={() => setOther(other + 1)}>Update Other {other}</button>
    </div>
  );
};

export default HookUseCallBack;

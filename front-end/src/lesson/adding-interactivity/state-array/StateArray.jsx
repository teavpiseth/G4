import React from "react";

export default function StateArray() {
  const [fruit, setFruit] = React.useState([
    { name: "yin", age: 20 }, //0
    { name: "makara", age: 21 }, //1
  ]);

  function addArray() {
    setFruit(
      fruit.filter((item, index) => {
        if (item.name == "yin") {
          console.log(index, item.name);
          return false;
        }
        console.log(index, item.name);
        return true;
      })
    );
  }

  return (
    <div>
      {fruit.map((obj, index) => {
        return (
          <p onClick={addArray} key={index}>
            {obj.name}
          </p>
        );
      })}
    </div>
  );
}

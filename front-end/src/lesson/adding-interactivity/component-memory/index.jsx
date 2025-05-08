import { useState } from "react";
import { sculptureList } from "./data";
import Greeting from "../../ui/condition-render/Greeting";
export default function Gallery() {
  //   let index = 0;
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= sculptureList.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
    // index = index + 1;
    // console.log(index);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <Greeting name={"sovannet"} />
      <Greeting name={"piseth"} />
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

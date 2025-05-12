import React, { useEffect } from "react";

export default function Gallary({ name }) {
  useEffect(() => {
    const intevel = setInterval(() => {
      console.log("connecting to server");
    }, 1000);

    return () => {
      clearInterval(intevel);
    };
  }, []);
  return <div className="profile">Gallary component {name}</div>;
}

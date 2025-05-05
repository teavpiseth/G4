import React, { useState } from "react";

export default function StateObject() {
  const [user, setUser] = useState({
    name: "vannet",
    age: 20,
    address: {
      city: "pp",
      khan: "resey keo",
    },
    field: "IT",
  });
  return (
    <div>
      <p
        onClick={() => {
          setUser({ ...user, name: "piseth" });
        }}
      >
        name: {user?.name}
      </p>
      <p>age: {user?.age}</p>
      <p
        onClick={() => {
          setUser({
            ...user,
            address: {
              ...user?.address,
              city: "takeo",
            },
          });
        }}
      >
        Address: {user?.address.city}
      </p>
      <p>Khan : {user?.address?.khan}</p>
    </div>
  );
}
